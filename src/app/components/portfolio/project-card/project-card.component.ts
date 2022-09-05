import { HttpClient } from '@angular/common/http'
import { AfterViewInit, Component, Input, ViewChild } from '@angular/core'
import { Router } from '@angular/router'
import { faGithub, IconDefinition } from '@fortawesome/free-brands-svg-icons'
import { NgbActiveModal, NgbCarousel, NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { Project } from '../projects.const'

@Component({
    selector: 'app-project-card',
    templateUrl: './project-card.component.html',
    styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements AfterViewInit {

    private _project!: Project
    imageUrls: string[] = []
    githubIcon: IconDefinition = faGithub

    @ViewChild(NgbCarousel) carouselComponent!: NgbCarousel

    @Input()
    set project(newProject: Project) {
        this._project = newProject
        this.imageUrls = newProject.additionalImages || [newProject.thumbnailImage]
    }
    get project(): Project {
        return this._project
    }

    constructor(
        private modalInstance: NgbActiveModal,
        private router: Router,
    ) { }

    ngAfterViewInit(): void {
        if (this.imageUrls.length <= 1) {
            this.carouselComponent.showNavigationArrows = false
            this.carouselComponent.showNavigationIndicators = false
        }
    }

    navigateToProjectUrl(): void {
        this.modalInstance.close()
        this.project.url && this.router.navigateByUrl(this.project.url)
    }

}
