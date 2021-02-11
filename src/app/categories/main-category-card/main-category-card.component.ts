import { Component, Input, OnInit } from '@angular/core';
import { MainCategory } from '../main-category/service/main-category.model';

@Component({
  selector: 'app-main-category-card',
  templateUrl: './main-category-card.component.html',
  styleUrls: ['./main-category-card.component.css']
})
export class MainCategoryCardComponent implements OnInit {

  @Input() mainCategory: MainCategory;
  
  constructor() { }

  ngOnInit(): void {
  }

}
