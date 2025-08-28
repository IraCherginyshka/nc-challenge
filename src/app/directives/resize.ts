import { Directive, OnDestroy, OnInit, ElementRef } from '@angular/core'

@Directive({
  selector: '[atgResize]',
})
export class Resize implements OnInit, OnDestroy {
  private resizeObserver?: ResizeObserver
  private textObserver!: MutationObserver

  constructor(private el: ElementRef<HTMLElement>) {}

  private calculateFontSize(
    containerWidth: number,
    textLength: number,
  ): number {
    return (containerWidth / textLength) * (1.8 + 2.9 / textLength)
  }

  ngOnInit() {
    const host = this.el.nativeElement
    let containerWidth: number
    let textLength: number

    //observe component width changes
    const resizeOnWidthChange = () => {
      containerWidth = host.clientWidth
      if (containerWidth === 0) return

      const fontSize = this.calculateFontSize(containerWidth, textLength)
      host.style.fontSize = `${fontSize}px`
    }

    this.resizeObserver = new ResizeObserver(resizeOnWidthChange)
    this.resizeObserver.observe(host)

    //observe component content changes
    this.textObserver = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'characterData') {
          textLength = mutation.target.textContent?.length ?? 0
          const fontSize = this.calculateFontSize(containerWidth, textLength)
          host.style.fontSize = `${fontSize}px`
        }
      }
    })

    const config = { characterData: true, subtree: true }
    this.textObserver.observe(host, config)
  }

  ngOnDestroy() {
    this.resizeObserver?.unobserve(this.el.nativeElement)
    this.textObserver?.disconnect()
  }
}
