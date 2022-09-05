import { AfterViewInit, Component, Input, ViewChild } from '@angular/core'
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap'
import { Project } from '../projects.const'

@Component({
    selector: 'app-project-card',
    templateUrl: './project-card.component.html',
    styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements AfterViewInit {

    private _project!: Project

    imageUrls: string[] = []

    @Input() 
    set project(newProject: Project) {
        this._project = newProject
        this.imageUrls = newProject.additionalImages || [newProject.thumbnailImage]
    }
    get project(): Project {
        return this._project
    }

    @ViewChild(NgbCarousel) carouselComponent!: NgbCarousel

    constructor() { }

    ngAfterViewInit(): void {
        if (this.imageUrls.length <= 1) {
            this.carouselComponent.showNavigationArrows = false
            this.carouselComponent.showNavigationIndicators = false
        }
    }

}
