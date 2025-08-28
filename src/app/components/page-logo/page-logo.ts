import { Component } from '@angular/core'
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-page-logo',
  imports: [NgOptimizedImage],
  templateUrl: './page-logo.html',
  styleUrl: './page-logo.scss',
})
export class PageLogo {}
