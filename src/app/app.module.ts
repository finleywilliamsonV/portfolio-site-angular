import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AboutMeComponent } from './components/about-me/about-me.component'
import { NavBarComponent } from './components/nav-bar/nav-bar.component'
import { PageTitleComponent } from './components/page-title/page-title.component'
import { PortfolioComponent } from './components/portfolio/portfolio.component'
import { ProjectCardComponent } from './components/portfolio/project-card/project-card.component'
import { ProjectThumbnailComponent } from './components/portfolio/project-thumbnail/project-thumbnail.component'
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component'
import { IconFadeOnHoverDirective } from './directives/icon-fade-on-hover.directive'

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    NavBarComponent,
    PortfolioComponent,
    AboutMeComponent,
    PageTitleComponent,
    ProjectCardComponent,
    ProjectThumbnailComponent,
    IconFadeOnHoverDirective
  ],
  bootstrap: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FontAwesomeModule],
  providers: [provideHttpClient(withInterceptorsFromDi())]
})
export class AppModule {}
