import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {
  private apiUrl = 'https://admin.chatcompose.com/responseapi';

  constructor(private http: HttpClient) {}

  sendMessage(message: string): Observable<any> {
    const body = {
      user: 'br_BALTZ-baltz',
      lang: 'PT',
      sessionid: 'unique-session-id',
      message: message
    };
    return this.http.post<any>(this.apiUrl, body);
  }
}
