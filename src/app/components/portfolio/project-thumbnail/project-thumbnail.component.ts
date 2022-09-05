import { Component, Input, OnInit } from '@angular/core'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { ProjectCardComponent } from '../project-card/project-card.component'
import { Project } from '../projects.const'

@Component({
    selector: 'app-project-thumbnail',
    templateUrl: './project-thumbnail.component.html',
    styleUrls: ['./project-thumbnail.component.scss']
})
export class ProjectThumbnailComponent {

    @Input() project!: Project

    constructor(private modalService: NgbModal) { }

    launchModal(): void {
        const modalRef = this.modalService.open(ProjectCardComponent, {
            size: 'xl',
            centered: true,
            modalDialogClass: 'xxl-modal'
        })
        const component = modalRef.componentInstance as ProjectCardComponent
        component.project = this.project
    }

}
