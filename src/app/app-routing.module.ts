import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AboutMeComponent } from './components/about-me/about-me.component'
import { FitnessTrackerComponent } from './components/fitness-tracker/fitness-tracker.component'
import { PortfolioComponent } from './components/portfolio/portfolio.component'
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: WelcomePageComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'fitness-tracker', component: FitnessTrackerComponent },
  { path: '**', redirectTo: '/home' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
