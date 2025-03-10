import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TradingService {
  private readonly API_URL = '/api/trading';

  constructor(private http: HttpClient) {}

  getTopStocks(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URL}/top-stocks`);
  }

  executeTrade(trade: any): Observable<any> {
    return this.http.post(`${this.API_URL}/execute`, trade);
  }

  getTradingHistory(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URL}/history`);
  }

  getAccountBalance(): Observable<any> {
    return this.http.get(`${this.API_URL}/balance`);
  }

  updateTradingSettings(settings: any): Observable<any> {
    return this.http.put(`${this.API_URL}/settings`, settings);
  }
}
