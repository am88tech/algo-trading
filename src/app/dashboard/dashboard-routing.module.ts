import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { TradingViewComponent } from './trading-view/trading-view.component';
import { ProfitLossComponent } from './profit-loss/profit-loss.component';
import { StockListComponent } from './stock-list/stock-list.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      { path: '', component: TradingViewComponent },
      { path: 'profit-loss', component: ProfitLossComponent },
      { path: 'stocks', component: StockListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }