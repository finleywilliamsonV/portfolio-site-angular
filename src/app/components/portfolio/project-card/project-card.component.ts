import { AfterViewInit, Component, Input, ViewChild } from '@angular/core'
import { Router } from '@angular/router'
import { faGithub, IconDefinition } from '@fortawesome/free-brands-svg-icons'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { NgbActiveModal, NgbCarousel } from '@ng-bootstrap/ng-bootstrap'
import isMobile from 'is-mobile'
import { Project } from '../projects.const'

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
  standalone: false
})
export class ProjectCardComponent implements AfterViewInit {
  private _project!: Project
  imageUrls: string[] = []
  isMobile: boolean = false

  githubIcon: IconDefinition = faGithub
  xIcon: IconDefinition = faX

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
    private router: Router
  ) {
    this.isMobile = isMobile()
  }

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

  closeModal(): void {
    this.modalInstance.close()
  }
}
