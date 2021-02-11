import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Breakpoint } from 'src/app/utils/ui/breakpoint.type';
import { BreakpointService } from 'src/app/utils/ui/service/breakpoint.service';
import { Product } from '../product/service/product.model';
import { PopularProductsService } from './service/popular-products.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css'],
})
export class PopularComponent implements OnInit, OnDestroy {
  popularProducts: Product[];
  subscriptions: Subscription[] = [];
  breakpoint: Breakpoint = 'medium';

  constructor(private popularProductsService: PopularProductsService, private breakpointService: BreakpointService) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.popularProductsService.getPopularProducts().subscribe((products) => {
        this.popularProducts = products;
      })
    );
    this.subscriptions.push(this.breakpointService.getBreakpoint().subscribe(breakpoint => {
      this.breakpoint = breakpoint;
    }))
  }

  ngOnDestroy() {
    for(let subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
    this.subscriptions = undefined;
  }
}
