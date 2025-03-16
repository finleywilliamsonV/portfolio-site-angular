import { Component } from '@angular/core'
import { OpenGraphService } from 'src/app/open-graph.service'

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  standalone: false
})
export class AboutMeComponent {
  constructor(openGraphService: OpenGraphService) {
    openGraphService.addMetaTags('about-me')
  }
}
