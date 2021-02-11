import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Breakpoint } from 'src/app/utils/ui/breakpoint.type';
import { BreakpointService } from 'src/app/utils/ui/service/breakpoint.service';
import { Category } from '../category/service/category.model';
import { CategoryService } from '../category/service/category.service';
import { MainCategory } from './service/main-category.model';
import { MainCategoryService } from './service/main-category.service';

@Component({
  selector: 'app-main-category',
  templateUrl: './main-category.component.html',
  styleUrls: ['./main-category.component.css'],
})
export class MainCategoryComponent implements OnInit {
  mainCategory: MainCategory;
  categories: Category[];
  breakpoint: Breakpoint = 'xsmall';
  subscriptions: Subscription[] = [];

  constructor(
    private route: ActivatedRoute,
    private mainCategoryService: MainCategoryService,
    private categoryService: CategoryService,
    private breakpointService: BreakpointService
  ) {}

  ngOnInit(): void {
    let id = '';
    this.route.queryParams
      .pipe(
        switchMap((queryParams) => {
          id = queryParams['id'];
          return this.mainCategoryService.getMainCategory(id);
        }),
        switchMap((mainCategory) => {
          this.mainCategory = mainCategory;
          return this.mainCategoryService.getCategories(id);
        }),
        switchMap((val) => {
          return this.categoryService.getCategories(val);
        })
      )
      .subscribe((categories) => {
        this.categories = categories;
      });

    this.subscriptions.push(
      this.breakpointService.getBreakpoint().subscribe((breakpoint) => {
        this.breakpoint = breakpoint;
      })
    );
  }
}
