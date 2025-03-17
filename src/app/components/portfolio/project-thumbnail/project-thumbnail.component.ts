import { Component, Input } from '@angular/core'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import isMobile from 'is-mobile'
import { ProjectCardComponent } from '../project-card/project-card.component'
import { Project } from '../projects.const'

@Component({
  selector: 'app-project-thumbnail',
  templateUrl: './project-thumbnail.component.html',
  styleUrls: ['./project-thumbnail.component.scss'],
  standalone: false
})
export class ProjectThumbnailComponent {
  @Input() project!: Project
  isMobile: boolean = false

  constructor(private modalService: NgbModal) {
    this.isMobile = isMobile()
  }

  launchModal(): void {
    const modalRef = this.modalService.open(ProjectCardComponent, {
      size: 'xl',
      centered: true
    })
    const component = modalRef.componentInstance as ProjectCardComponent
    component.project = this.project
  }
}
