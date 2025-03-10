import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private readonly API_URL = '/api/notifications';

  constructor(private http: HttpClient) {}

  subscribeToTradeAlerts(email: string): Observable<any> {
    return this.http.post(`${this.API_URL}/subscribe`, { email });
  }

  updateNotificationPreferences(preferences: any): Observable<any> {
    return this.http.put(`${this.API_URL}/preferences`, preferences);
  }
}