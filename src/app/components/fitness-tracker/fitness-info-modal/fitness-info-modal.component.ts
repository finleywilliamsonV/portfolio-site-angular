import { Component, Input } from '@angular/core'
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'
import { WorkoutDay } from '../fitness-tracker.model'

@Component({
  selector: 'app-fitness-info-modal',
  imports: [],
  templateUrl: './fitness-info-modal.component.html',
  styleUrl: './fitness-info-modal.component.scss'
})
export class FitnessInfoModalComponent {
  @Input() workoutDay: WorkoutDay | undefined

  constructor(protected activeModal: NgbActiveModal) {}
}
