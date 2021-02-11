import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Size } from 'src/app/utils/ui/size.type';
import { Product } from '../product/service/product.model';
import { RecommendedProductsService } from './service/recommended-products.service';

@Component({
  selector: 'app-recommended-products',
  templateUrl: './recommended-products.component.html',
  styleUrls: ['./recommended-products.component.css']
})
export class RecommendedProductsComponent implements OnInit, OnDestroy {
  recommendedProducts: Product[];
  subscriptions: Subscription[] = [];
  @Input() size: Size = 'xsmall';

  constructor(private recommendedProductsService: RecommendedProductsService) { }

  ngOnInit(): void {
    this.subscriptions.push(this.recommendedProductsService.getRecommendedProducts().subscribe(products => {
      this.recommendedProducts = products;
    }));
  }

  ngOnDestroy() {
    for(let subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
    this.subscriptions = undefined;
  }
}
