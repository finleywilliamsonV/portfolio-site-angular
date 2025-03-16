import { Component } from '@angular/core'
import { StopwatchComponent } from './stopwatch/stopwatch.component'

@Component({
  selector: 'app-fitness-tracker',
  imports: [StopwatchComponent],
  templateUrl: './fitness-tracker.component.html',
  styleUrl: './fitness-tracker.component.scss'
})
export class FitnessTrackerComponent {}
