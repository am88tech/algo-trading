import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent {
  navLinks = [
    { path: '/dashboard', label: 'Trading View', icon: 'trending_up' },
    { path: '/dashboard/profit-loss', label: 'Profit/Loss', icon: 'account_balance' },
    { path: '/dashboard/stocks', label: 'Stock List', icon: 'list' }
  ];
}