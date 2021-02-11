import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Size } from 'src/app/utils/ui/size.type';
import { Product } from '../product/service/product.model';
import { RecentlyViewedProductsService } from './service/recently-viewed-products.service';

@Component({
  selector: 'app-recently-viewed-products',
  templateUrl: './recently-viewed-products.component.html',
  styleUrls: ['./recently-viewed-products.component.css']
})
export class RecentlyViewedProductsComponent implements OnInit {
  recentlyViewedProducts: Product[];
  subscriptions: Subscription[] = [];
  @Input() size: Size = 'xsmall';

  constructor(private recentlyViewedProductsService: RecentlyViewedProductsService) { }

  ngOnInit(): void {
    this.subscriptions.push(this.recentlyViewedProductsService.getRecentlyViewedProducts().subscribe(products => {
      this.recentlyViewedProducts = products;
    }));
  }

  ngOnDestroy() {
    for(let subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
    this.subscriptions = undefined;
  }
}
