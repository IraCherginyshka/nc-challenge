import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { delay, Observable } from 'rxjs'
import { Quote } from '../interfaces/quote.interface'

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  private apiUrl = 'https://dummyjson.com/quotes/random'

  constructor(private http: HttpClient) {}

  getQuote(): Observable<Quote> {
    // Delay was added for better testing page interaction during api call
    return this.http.get<Quote>(this.apiUrl).pipe(delay(3000))
  }
}
