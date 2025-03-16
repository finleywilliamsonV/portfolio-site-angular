import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  Input
} from '@angular/core'

@Directive({
  selector: '[appIconFadeOnHover]'
})
export class IconFadeOnHoverDirective implements AfterViewInit {
  @Input() appIconFadeOnHover: string = '#fff'

  private initialColor!: string
  private pathElement!: HTMLElement | null

  @HostListener('mouseenter') onMouseEnter() {
    if (this.pathElement) {
      this.pathElement.style.fill = this.appIconFadeOnHover
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.pathElement) {
      this.pathElement.style.fill = this.initialColor
    }
  }

  constructor(private element: ElementRef<HTMLElement>) {
    this.initialColor = this.element.nativeElement.style.color
  }

  ngAfterViewInit(): void {
    this.pathElement = this.element.nativeElement.firstElementChild
      ?.firstElementChild as HTMLElement | null
    if (this.pathElement) {
      this.pathElement.style.transition = '.15s 0s ease-in-out'
    }
  }
}
