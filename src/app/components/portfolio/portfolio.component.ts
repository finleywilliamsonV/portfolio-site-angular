import { Component } from '@angular/core'
import { Project, ProjectData } from './projects.const'

@Component({
    selector: 'app-portfolio',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

    projects: Project[] = ProjectData

    constructor() { }
}
