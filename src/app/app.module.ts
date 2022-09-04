import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component'
import { NavBarComponent } from './components/nav-bar/nav-bar.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { PortfolioComponent } from './components/portfolio/portfolio.component'
import { AboutMeComponent } from './components/about-me/about-me.component'
import { PageTitleComponent } from './components/page-title/page-title.component'

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    NavBarComponent,
    PortfolioComponent,
    AboutMeComponent,
    PageTitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
