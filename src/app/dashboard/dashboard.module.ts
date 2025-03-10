import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { TradingViewComponent } from './trading-view/trading-view.component';
import { ProfitLossComponent } from './profit-loss/profit-loss.component';
import { StockListComponent } from './stock-list/stock-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    TradingViewComponent,
    ProfitLossComponent,
    StockListComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class DashboardModule { }
