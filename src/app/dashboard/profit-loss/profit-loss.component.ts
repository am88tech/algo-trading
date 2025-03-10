import { Component, OnInit, OnDestroy } from '@angular/core';
import { TradingService } from '../../core/services/trading.service';
import { WebsocketService } from '../../core/services/websocket.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profit-loss',
  templateUrl: './profit-loss.component.html',
  styleUrls: ['./profit-loss.component.scss']
})
export class ProfitLossComponent implements OnInit, OnDestroy {
  profitLossData: any = {};
  trades: any[] = [];
  displayedColumns: string[] = ['symbol', 'type', 'price', 'quantity', 'total', 'status'];
  private wsSubscription?: Subscription;

  constructor(
    private tradingService: TradingService,
    private wsService: WebsocketService
  ) {}

  ngOnInit(): void {
    this.loadTradingHistory();
    this.connectWebSocket();
  }

  ngOnDestroy(): void {
    this.wsSubscription?.unsubscribe();
    this.wsService.close();
  }

  private loadTradingHistory(): void {
    this.tradingService.getTradingHistory().subscribe(
      history => this.trades = history
    );
  }

  private connectWebSocket(): void {
    this.wsService.connect();
    this.wsSubscription = this.wsService.getMessages().subscribe(
      data => {
        if (data.type === 'PROFIT_LOSS_UPDATE') {
          this.profitLossData = data.payload;
        }
      }
    );
  }
}
