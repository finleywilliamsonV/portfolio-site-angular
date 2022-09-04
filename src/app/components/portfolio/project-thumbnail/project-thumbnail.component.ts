import { Component, Input, OnInit } from '@angular/core'
import { Project } from '../projects.const'

@Component({
    selector: 'app-project-thumbnail',
    templateUrl: './project-thumbnail.component.html',
    styleUrls: ['./project-thumbnail.component.scss']
})
export class ProjectThumbnailComponent {

    @Input() project!: Project

    constructor() { }

}
