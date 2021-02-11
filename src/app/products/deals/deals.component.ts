import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Breakpoint } from 'src/app/utils/ui/breakpoint.type';
import { BreakpointService } from 'src/app/utils/ui/service/breakpoint.service';
import { Deal } from './deal/service/deal.model';
import { DealService } from './deal/service/deal.service';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css'],
})
export class DealsComponent implements OnInit, OnDestroy {
  deals: Deal[];
  subscriptions: Subscription[] = [];
  breakpoint: Breakpoint;
  proportion: number = 50;

  constructor(
    private dealService: DealService,
    private breakpointService: BreakpointService
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.dealService.getDeals().subscribe((deals) => {
        this.deals = deals;
      })
    );

    this.subscriptions.push(
      this.breakpointService.getBreakpoint().subscribe((breakpoint) => {
        this.breakpoint = breakpoint;
        switch (breakpoint) {
          case 'xsmall':
            this.proportion = 60;
            break;
          case 'small':
            this.proportion = 50;
            break;
          case 'medium':
            this.proportion = 40;
            break;
          case 'large':
            this.proportion = 30;
            break;
          case 'xlarge':
            this.proportion = 30;
            break;
          default:
            this.proportion = 60;
        }
      })
    );
  }

  ngOnDestroy() {
    for (let subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
    this.subscriptions = undefined;
  }
}
