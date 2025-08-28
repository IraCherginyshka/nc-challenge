import { Component, signal } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { PageLogo } from './components/page-logo/page-logo'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PageLogo],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('nc-challenge')
}
