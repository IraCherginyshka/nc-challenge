import { Component, OnInit, OnDestroy, signal } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { LocalStorage } from '../../enums/local-storage.enum'
import { Quote } from '../quote/quote'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import { Resize } from '../../directives/resize'

@Component({
  selector: 'app-countdown',
  imports: [FormsModule, Quote, MatFormFieldModule, MatInputModule, Resize],
  templateUrl: './countdown.html',
  styleUrl: './countdown.scss',
})
export class Countdown implements OnInit, OnDestroy {
  eventName = ''
  eventDate = ''
  countdown = signal('')

  private timer: any

  ngOnInit() {
    this.loadState()
    this.startCountdown()
  }

  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer)
    }
  }

  updateEventName(name: string) {
    this.eventName = name
    this.saveState()
  }

  updateEventDate(date: string) {
    this.eventDate = date
    this.saveState()
    this.startCountdown()
  }

  private startCountdown() {
    if (this.timer) {
      clearInterval(this.timer)
    }

    if (!this.eventDate) {
      this.countdown.set('Please set event date!')
      return
    }

    this.timer = setInterval(() => {
      const now = new Date().getTime()
      const timeDifference = new Date(this.eventDate).getTime() - now

      if (timeDifference < 0) {
        clearInterval(this.timer)
        this.countdown.set('The event has passed!')
        return
      }

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      )
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60),
      )
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000)

      this.countdown.set(`${days}days, ${hours}h, ${minutes}m, ${seconds}s`)
    }, 1000)
  }

  private saveState() {
    const data = {
      name: this.eventName,
      date: this.eventDate,
    }
    localStorage.setItem(LocalStorage.COUNTDOWN_DATA, JSON.stringify(data))
  }

  private loadState() {
    const data = localStorage.getItem(LocalStorage.COUNTDOWN_DATA)
    if (data) {
      const parsedData = JSON.parse(data)
      this.eventName = parsedData.name
      this.eventDate = parsedData.date
    }
  }
}
