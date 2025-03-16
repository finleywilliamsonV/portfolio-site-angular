import { Component } from '@angular/core'
import { OpenGraphService } from 'src/app/open-graph.service'
import { Project, ProjectData } from './projects.const'

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  projects: Project[] = ProjectData

  constructor(openGraphService: OpenGraphService) {
    openGraphService.addMetaTags('portfolio')
  }
}
