import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss'],
  standalone: false
})
export class PageTitleComponent {
  @Input() title: string = ''
}
