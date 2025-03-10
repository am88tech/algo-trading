import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  private readonly API_URL = '/api/stocks';

  constructor(private http: HttpClient) {}

  getStockPrice(symbol: string): Observable<any> {
    return this.http.get(`${this.API_URL}/price/${symbol}`);
  }

  getStockAnalysis(symbol: string): Observable<any> {
    return this.http.get(`${this.API_URL}/analysis/${symbol}`);
  }

  getMarketOverview(): Observable<any> {
    return this.http.get(`${this.API_URL}/market-overview`);
  }
}