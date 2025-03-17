import { Component } from '@angular/core'
import { NavigationEnd, Router } from '@angular/router'
import { filter, map } from 'rxjs/operators'
import { OpenGraphService } from './open-graph.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false
})
export class AppComponent {
  title = 'portfolio-site-angular'

  showNavbar$ = this._router.events.pipe(
    filter((event): event is NavigationEnd => event instanceof NavigationEnd),
    map(event => event.url !== '/fitness-tracker')
  )

  constructor(
    openGraphService: OpenGraphService,
    private _router: Router
  ) {
    openGraphService.addMetaTags('root')
  }
}
