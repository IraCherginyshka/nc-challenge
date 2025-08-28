import { Component, OnInit } from '@angular/core'
import { QuoteService } from '../../services/quote'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { Observable } from 'rxjs'
import { AsyncPipe } from '@angular/common'
import { Quote as QuoteInterface } from '../../interfaces/quote.interface'

@Component({
  selector: 'app-quote',
  imports: [MatProgressSpinnerModule, AsyncPipe],
  templateUrl: './quote.html',
  styleUrl: './quote.scss',
})
export class Quote implements OnInit {
  quote$!: Observable<QuoteInterface>

  constructor(private quoteService: QuoteService) {}

  ngOnInit() {
    this.quote$ = this.quoteService.getQuote()
  }
}
