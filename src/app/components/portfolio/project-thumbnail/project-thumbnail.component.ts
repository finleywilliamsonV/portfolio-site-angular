import { Component, Input, OnInit } from '@angular/core'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { MobileDetectionService } from 'src/app/mobile-detection.service'
import { ProjectCardComponent } from '../project-card/project-card.component'
import { Project } from '../projects.const'

@Component({
    selector: 'app-project-thumbnail',
    templateUrl: './project-thumbnail.component.html',
    styleUrls: ['./project-thumbnail.component.scss']
})
export class ProjectThumbnailComponent {

    @Input() project!: Project
    isMobile: boolean = false

    constructor(
        private modalService: NgbModal,
        private mobileDetectionService: MobileDetectionService
    ) {
        this.isMobile = mobileDetectionService.isMobile
    }

    launchModal(): void {
        const modalRef = this.modalService.open(ProjectCardComponent, {
            size: 'xl',
            centered: true,
        })
        const component = modalRef.componentInstance as ProjectCardComponent
        component.project = this.project
    }

}
