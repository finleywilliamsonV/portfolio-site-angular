import { NgClass } from '@angular/common'
import { Component, computed, effect, signal } from '@angular/core'
import { toObservable } from '@angular/core/rxjs-interop'
import { FaIconComponent } from '@fortawesome/angular-fontawesome'
import { faArrowRotateLeft, faInfo } from '@fortawesome/free-solid-svg-icons'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { filter, interval, map, takeWhile } from 'rxjs'
import { FitnessInfoModalComponent } from './fitness-info-modal/fitness-info-modal.component'
import { Exercise, MASTER_WORKOUT_DATA } from './fitness-tracker.model'
enum TrackerState {
  STARTED,
  STOPPED
}

const getTransitionObject = (
  transitionTo: string,
  duration_sec: TransitionTime_sec
): Exercise => ({
  name: transitionTo,
  duration_sec,
  isTransition: true,
  isRest: false
})

const getRestObject = (duration_sec: number): Exercise => ({
  name: 'Rest',
  duration_sec,
  isTransition: false,
  isRest: true
})

const TRANSITION_TIMES_SEC = [0, 5, 10] as const

const TICK_TIME_MS = 20

type TransitionTime_sec = (typeof TRANSITION_TIMES_SEC)[number]

@Component({
  selector: 'app-fitness-tracker',
  imports: [FaIconComponent, NgClass],
  templateUrl: './fitness-tracker.component.html',
  styleUrl: './fitness-tracker.component.scss'
})
export class FitnessTrackerComponent {
  protected readonly TrackerState = TrackerState
  protected readonly TransitionTimes = TRANSITION_TIMES_SEC
  protected readonly workoutData = MASTER_WORKOUT_DATA
  protected readonly infoIcon = faInfo
  protected readonly refreshIcon = faArrowRotateLeft

  protected readonly selectedDay = signal(0)
  protected readonly selectedTransitionTime = signal<TransitionTime_sec>(5)

  protected readonly currentWorkout = computed(() => {
    const workout = this.workoutData[this.selectedDay()]
    if (!workout) {
      throw new Error('Index out of bounds in `currentWorkout`')
    }
    return workout
  })

  protected readonly exerciseStack = computed<Exercise[]>(() => {
    const stack = this.currentWorkout().exercises.reduce((agg, curr) => {
      const _selectedTime = this.selectedTransitionTime()

      if (_selectedTime > 0) {
        agg.push(getTransitionObject(curr.name, _selectedTime))
      }

      agg.push(curr)
      return agg
    }, [] as Exercise[])

    stack.push(getRestObject(this.currentWorkout().restAfterSet_sec))
    return stack
  })

  protected readonly currentRound = signal(1)
  protected readonly currentExerciseIndex = signal(0)
  protected readonly currentExercise = computed<Exercise | undefined>(() => {
    const exercise = this.exerciseStack()[this.currentExerciseIndex()]
    return exercise ? JSON.parse(JSON.stringify(exercise)) : undefined
  })
  protected readonly currentExerciseLength = computed(
    () => this.currentExercise()?.duration_sec ?? 0
  )
  protected readonly timeElapsed = signal(0)
  protected readonly currentExerciseTimeRemaining = computed(
    () => this.currentExerciseLength() - this.timeElapsed()
  )

  protected readonly nextExercise = computed(
    () => this.exerciseStack()[this.currentExerciseIndex() + 1]
  )

  protected readonly currentState = signal(TrackerState.STOPPED)
  protected readonly currentState$ = toObservable(this.currentState)

  protected readonly isCurrentRoundTransition = computed(
    () => this.currentExercise()?.isTransition
  )
  protected readonly isCurrentRoundRest = computed(
    () => this.currentExercise()?.isRest
  )
  protected readonly isOnLastExercise = computed(
    () => this.currentExerciseIndex() === this.exerciseStack().length - 1
  )
  protected readonly isNextRoundTransition = computed(
    () => this.nextExercise()?.isTransition
  )
  protected readonly isNextRoundRest = computed(
    () => this.nextExercise()?.isRest
  )

  protected readonly nextExerciseName = computed(() =>
    this.isOnLastExercise()
      ? `Round ${this.currentRound() + 1}`
      : this.nextExercise()?.name
  )

  protected readonly isLastRound = computed(
    () => this.currentRound() === this.currentWorkout().repetitions
  )

  protected readonly isLastExercise = computed(
    () => this.currentExerciseIndex() === this.exerciseStack().length - 1
  )

  protected readonly isDoneWithExercises = computed(
    () =>
      this.isLastRound() &&
      this.isLastExercise() &&
      this.currentExerciseTimeRemaining() <= 0
  )

  constructor(private modalService: NgbModal) {
    effect(() => {
      console.log(this.exerciseStack())
    })
  }

  startCountdown = (): void => {
    interval(TICK_TIME_MS)
      .pipe(
        map(() => this.currentExercise()),
        filter(exercise => !!exercise),
        takeWhile(
          () =>
            this.currentExerciseTimeRemaining() >= 0 &&
            this.currentState() !== TrackerState.STOPPED &&
            !!this.currentExercise()
        )
      )
      .subscribe(() => {
        const exercise = this.currentExercise()

        if (exercise && this.currentExerciseTimeRemaining() > 0) {
          this.timeElapsed.update(val => val + 1)
        }

        // if not the last round, increment the stack index
        if (
          !(this.isLastRound() && this.isLastExercise()) &&
          this.currentExerciseTimeRemaining() === 0
        ) {
          this.currentExerciseIndex.update(val => val + 1)
          this.timeElapsed.set(0)
        }

        const currentExerciseAfterIncremement = this.currentExercise()

        /**
         * If, after incrementing the stack index, the current exercise is undefined,
         * and we are not on the last round, increment the round and reset the stack index
         */
        if (!currentExerciseAfterIncremement) {
          this.currentRound.update(val => val + 1)
          this.currentExerciseIndex.set(0)
        }
      })
  }

  openInfoModal = (): void => {
    const modalRef = this.modalService.open(FitnessInfoModalComponent, {
      centered: true
    })
    modalRef.componentInstance.workoutDay = this.currentWorkout()
  }

  handleDayChange = (event: Event): void => {
    const target = event.target as HTMLSelectElement
    this.selectedDay.set(+target.value - 1)
  }

  handleStartPress = (): void => {
    this.currentState.set(TrackerState.STARTED)
    this.startCountdown()
  }

  handleStopPress = (): void => {
    this.currentState.set(TrackerState.STOPPED)
  }

  handleResetExercisePress = (): void => {
    this.currentState.set(TrackerState.STOPPED)
    this.timeElapsed.set(0)
  }

  handleResetRoundPress = (): void => {
    this.currentState.set(TrackerState.STOPPED)
    this.currentExerciseIndex.set(0)
    this.timeElapsed.set(0)
  }

  handleResetDayPress = (): void => {
    this.currentState.set(TrackerState.STOPPED)
    this.currentRound.set(1)
    this.currentExerciseIndex.set(0)
    this.timeElapsed.set(0)
  }
}
