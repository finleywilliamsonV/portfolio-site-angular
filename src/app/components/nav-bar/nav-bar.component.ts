import { Component } from '@angular/core'
import { IconDefinition } from '@fortawesome/fontawesome-common-types'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

    githubIcon: IconDefinition = faGithub
    emailIcon: IconDefinition = faEnvelope
}
