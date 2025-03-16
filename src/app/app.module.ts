import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component'
import { NavBarComponent } from './components/nav-bar/nav-bar.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { PortfolioComponent } from './components/portfolio/portfolio.component'
import { AboutMeComponent } from './components/about-me/about-me.component'
import { PageTitleComponent } from './components/page-title/page-title.component'
import { ProjectCardComponent } from './components/portfolio/project-card/project-card.component'
import { ProjectThumbnailComponent } from './components/portfolio/project-thumbnail/project-thumbnail.component'
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
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
