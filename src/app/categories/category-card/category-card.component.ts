import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../category/service/category.model';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.css'],
})
export class CategoryCardComponent implements OnInit {
  @Input() category: Category;

  constructor() {}

  ngOnInit(): void {}
}
