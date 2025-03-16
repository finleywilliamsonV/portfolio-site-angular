import { Component } from '@angular/core'
import { OpenGraphService } from './open-graph.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false
})
export class AppComponent {
  title = 'portfolio-site-angular'

  constructor(openGraphService: OpenGraphService) {
    openGraphService.addMetaTags('root')
  }
}
