import { TitleCasePipe } from '@angular/common'
import { Component, computed, effect, signal } from '@angular/core'
import { toObservable } from '@angular/core/rxjs-interop'
import { FaIconComponent } from '@fortawesome/angular-fontawesome'
import { faArrowRotateLeft, faInfo } from '@fortawesome/free-solid-svg-icons'
import { interval, takeWhile } from 'rxjs'
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

type TransitionTime_sec = (typeof TRANSITION_TIMES_SEC)[number]

@Component({
  selector: 'app-fitness-tracker',
  imports: [FaIconComponent, TitleCasePipe],
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
  protected readonly selectedTransitionTime = signal<TransitionTime_sec>(0)

  protected readonly currentWorkout = computed(() => {
    const workout = this.workoutData[this.selectedDay()]
    if (!workout) {
      throw new Error('Index out of bounds in `currentWorkout`')
    }
    return workout
  })

  protected readonly currentExercises = computed<Exercise[]>(() =>
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
  protected readonly currentExercise = computed<Exercise>(() => {
    const exercise = this.currentWorkout()?.exercises[this.currentRound()]
    if (!exercise) {
      throw new Error('Index out of bounds in `currentExercise`')
    }
    return exercise
  })
  protected readonly nextExercise = computed(
    () => this.currentWorkout().exercises[this.currentRound() + 1]
  )

  protected readonly currentState = signal(TrackerState.STOPPED)
  protected readonly currentState$ = toObservable(this.currentState)

  constructor() {
    effect(() => {
      console.log(this.currentExercises())
    })
  }

  startCountdown = (): void => {
    interval(1000)
      .pipe(takeWhile(() => this.currentState() !== TrackerState.STOPPED))
      .subscribe(() => {
        this.currentExercise().duration_sec--
      })
  }

  handleStartPress = (): void => {
    this.currentState.set(TrackerState.STARTED)
    this.startCountdown()
  }

  handleStopPress = (): void => {
    this.currentState.set(TrackerState.STOPPED)
  }
}
