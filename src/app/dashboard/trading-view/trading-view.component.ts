import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TradingService } from '../../core/services/trading.service';
import { WebsocketService } from '../../core/services/websocket.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-trading-view',
  templateUrl: './trading-view.component.html',
  styleUrls: ['./trading-view.component.scss']
})
export class TradingViewComponent implements OnInit, OnDestroy {
  tradingForm: FormGroup;
  stocks: any[] = [];
  private wsSubscription?: Subscription;

  constructor(
    private fb: FormBuilder,
    private tradingService: TradingService,
    private wsService: WebsocketService
  ) {
    this.tradingForm = this.fb.group({
      amount: ['', [Validators.required, Validators.min(1)]],
      strategy: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadTopStocks();
    this.connectWebSocket();
  }

  ngOnDestroy(): void {
    this.wsSubscription?.unsubscribe();
    this.wsService.close();
  }

  private loadTopStocks(): void {
    this.tradingService.getTopStocks().subscribe(
      stocks => this.stocks = stocks
    );
  }

  private connectWebSocket(): void {
    this.wsService.connect();
    this.wsSubscription = this.wsService.getMessages().subscribe(
      message => {
        // Handle real-time updates
        console.log('Received message:', message);
      }
    );
  }

  onSubmit(): void {
    if (this.tradingForm.valid) {
      this.tradingService.updateTradingSettings(this.tradingForm.value).subscribe(
        response => {
          console.log('Trading settings updated:', response);
        }
      );
    }
  }
}
