import { Component, computed, Input, Signal } from '@angular/core'
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'
import { WorkoutDay } from '../fitness-tracker.model'

@Component({
  selector: 'app-fitness-info-modal',
  imports: [],
  templateUrl: './fitness-info-modal.component.html',
  styleUrl: './fitness-info-modal.component.scss'
})
export class FitnessInfoModalComponent {
  @Input() workoutDay: Signal<WorkoutDay> | undefined
  @Input() totalExpectedTime_sec: Signal<number> | undefined

  protected readonly totalExpectedTime_string: Signal<string | undefined> =
    computed(() => {
      if (!this.totalExpectedTime_sec) {
        return undefined
      }
      const seconds = this.totalExpectedTime_sec()
      const minutes = Math.floor(seconds / 60)
      const remainderSeconds = seconds % 60

      let returnChunks: string[] = []
      if (minutes > 0) {
        returnChunks.push(`${minutes} minutes`)
      }
      if (remainderSeconds > 0) {
        returnChunks.push(`${remainderSeconds} seconds`)
      }
      return returnChunks.join(', ')
    })

  constructor(protected activeModal: NgbActiveModal) {}
}
