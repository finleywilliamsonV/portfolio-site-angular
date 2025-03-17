import { NgClass } from '@angular/common'
import { Component, computed, effect, signal } from '@angular/core'
import { toObservable } from '@angular/core/rxjs-interop'
import { FaIconComponent } from '@fortawesome/angular-fontawesome'
import { faArrowRotateLeft, faInfo } from '@fortawesome/free-solid-svg-icons'
import { filter, interval, map, takeWhile } from 'rxjs'
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
  isTransition: true
})

const TRANSITION_TIMES_SEC = [0, 5, 10] as const

const TICK_TIME_MS = 100

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
    console.log('current workout:', workout)
    return workout
  })

  protected readonly exerciseStack = computed<Exercise[]>(() =>
    this.currentWorkout().exercises.reduce((agg, curr) => {
      const _selectedTime = this.selectedTransitionTime()

      if (_selectedTime > 0) {
        agg.push(getTransitionObject(curr.name, _selectedTime))
      }

      agg.push(curr)
      return agg
    }, [] as Exercise[])
  )

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
  protected readonly isOnLastExercise = computed(
    () => this.currentExerciseIndex() === this.exerciseStack().length - 1
  )
  protected readonly isNextRoundTransition = computed(
    () => this.nextExercise()?.isTransition
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

  constructor() {
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
          console.log('setting current exercise index to 0')
          this.currentExerciseIndex.set(0)
        }
      })
  }

  handleStartPress = (): void => {
    this.currentState.set(TrackerState.STARTED)
    this.startCountdown()
  }

  handleResetDayPress = (): void => {
    this.currentState.set(TrackerState.STOPPED)
    this.currentRound.set(1)
    this.currentExerciseIndex.set(0)
    this.timeElapsed.set(0)
  }

  handleResetRoundPress = (): void => {
    this.currentState.set(TrackerState.STOPPED)
    this.currentExerciseIndex.set(0)
    this.timeElapsed.set(0)
  }

  handleResetExercisePress = (): void => {
    this.currentState.set(TrackerState.STOPPED)
    this.timeElapsed.set(0)
  }

  handleStopPress = (): void => {
    this.currentState.set(TrackerState.STOPPED)
  }
}
