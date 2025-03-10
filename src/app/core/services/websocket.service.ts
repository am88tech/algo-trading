import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { Observable, Subject } from 'rxjs';
import { retry, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private socket$!: WebSocketSubject<any>;
  private messagesSubject = new Subject<any>();

  public connect(): void {
    if (!this.socket$ || this.socket$.closed) {
      this.socket$ = webSocket('ws://localhost:8080/ws');
      this.socket$.pipe(
        retry(1),
        tap({
          error: error => console.error(error)
        })
      ).subscribe(
        message => this.messagesSubject.next(message)
      );
    }
  }

  public sendMessage(message: any): void {
    this.socket$.next(message);
  }

  public getMessages(): Observable<any> {
    return this.messagesSubject.asObservable();
  }

  public close(): void {
    this.socket$.complete();
  }
}
