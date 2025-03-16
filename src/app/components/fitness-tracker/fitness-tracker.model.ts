export type Exercise =
  | 'plank'
  | 'air_squats'
  | 'alternate_leg_lunges'
  | 'knee_drives'
  | 'down_ups'

export interface Set {
  exercises: { exercise: Exercise; durationSeconds: number }[]
  rest_after_exercise_seconds: number
  repetitions: number
}

export interface ContinuousRound {
  exercises: { exercise: Exercise; durationSecs: number | 'reps' }[]
  rounds: number | 'continuous'
}

export type Day =
  | {
      day: number
      rest: true
    }
  | {
      day: number
      setInfo: Set
    }

export type WorkoutPlan = Day[]

export const WORKOUT_PLAN: WorkoutPlan = [
  {
    day: 1,
    setInfo: {
      exercises: [
        { exercise: 'plank', durationSeconds: 20 },
        { exercise: 'air_squats', durationSeconds: 20 },
        { exercise: 'alternate_leg_lunges', durationSeconds: 20 }
      ],
      rest_after_exercise_seconds: 60,
      repetitions: 5
    }
  },
  { day: 2, rest: true },
  {
    day: 3,
    setInfo: {
      exercises: [
        { exercise: 'knee_drives', durationSeconds: 30 },
        { exercise: 'air_squats', durationSeconds: 30 },
        { exercise: 'down_ups', durationSeconds: 30 }
      ],
      rest_after_exercise_seconds: 60,
      repetitions: 5
    }
  },
  { day: 4, rest: true },
  {
    day: 5,
    setInfo: {
      exercises: [
        { exercise: 'knee_drives', durationSeconds: 20 },
        { exercise: 'air_squats', durationSeconds: 20 },
        { exercise: 'alternate_leg_lunges', durationSeconds: 45 }
      ],
      rest_after_exercise_seconds: 60,
      repetitions: 6
    }
  },
  { day: 6, rest: true },
  {
    day: 7,
    setInfo: {
      exercises: [
        { exercise: 'plank', durationSeconds: 20 },
        { exercise: 'air_squats', durationSeconds: 20 },
        { exercise: 'alternate_leg_lunges', durationSeconds: 20 }
      ],
      rest_after_exercise_seconds: 60,
      repetitions: 5
    }
  },
  { day: 8, rest: true },
  {
    day: 9,
    setInfo: {
      exercises: [
        { exercise: 'knee_drives', durationSeconds: 30 },
        { exercise: 'air_squats', durationSeconds: 30 },
        { exercise: 'down_ups', durationSeconds: 30 }
      ],
      rest_after_exercise_seconds: 60,
      repetitions: 5
    }
  },
  { day: 10, rest: true },
  {
    day: 11,
    setInfo: {
      exercises: [
        { exercise: 'plank', durationSeconds: 30 },
        { exercise: 'air_squats', durationSeconds: 30 },
        { exercise: 'alternate_leg_lunges', durationSeconds: 45 }
      ],
      rest_after_exercise_seconds: 60,
      repetitions: 6
    }
  },
  { day: 12, rest: true },
  {
    day: 13,
    setInfo: {
      exercises: [
        { exercise: 'knee_drives', durationSeconds: 30 },
        { exercise: 'air_squats', durationSeconds: 30 },
        { exercise: 'alternate_leg_lunges', durationSeconds: 30 }
      ],
      rest_after_exercise_seconds: 60,
      repetitions: 6
    }
  },
  { day: 14, rest: true },
  {
    day: 15,
    setInfo: {
      exercises: [
        { exercise: 'knee_drives', durationSeconds: 30 },
        { exercise: 'air_squats', durationSeconds: 30 },
        { exercise: 'down_ups', durationSeconds: 30 }
      ],
      rest_after_exercise_seconds: 45,
      repetitions: 6
    }
  },
  { day: 16, rest: true },
  {
    day: 17,
    setInfo: {
      exercises: [
        { exercise: 'plank', durationSeconds: 45 },
        { exercise: 'air_squats', durationSeconds: 45 },
        { exercise: 'knee_drives', durationSeconds: 45 }
      ],
      rest_after_exercise_seconds: 0,
      repetitions: 3
    }
  },
  { day: 18, rest: true },
  {
    day: 19,
    setInfo: {
      exercises: [
        { exercise: 'air_squats', durationSeconds: 30 },
        { exercise: 'alternate_leg_lunges', durationSeconds: 30 },
        { exercise: 'down_ups', durationSeconds: 30 }
      ],
      rest_after_exercise_seconds: 60,
      repetitions: 6
    }
  },
  { day: 20, rest: true },
  {
    day: 21,
    setInfo: {
      exercises: [
        { exercise: 'plank', durationSeconds: 30 },
        { exercise: 'air_squats', durationSeconds: 30 },
        { exercise: 'alternate_leg_lunges', durationSeconds: 30 }
      ],
      rest_after_exercise_seconds: 60,
      repetitions: 8
    }
  },
  { day: 22, rest: true },
  {
    day: 23,
    setInfo: {
      exercises: [
        { exercise: 'knee_drives', durationSeconds: 30 },
        { exercise: 'air_squats', durationSeconds: 30 },
        { exercise: 'down_ups', durationSeconds: 30 }
      ],
      rest_after_exercise_seconds: 60,
      repetitions: 8
    }
  },
  { day: 24, rest: true },
  {
    day: 25,
    setInfo: {
      exercises: [
        { exercise: 'plank', durationSeconds: 40 },
        { exercise: 'air_squats', durationSeconds: 40 },
        { exercise: 'knee_drives', durationSeconds: 40 },
        { exercise: 'alternate_leg_lunges', durationSeconds: 40 }
      ],
      rest_after_exercise_seconds: 15,
      repetitions: 3
    }
  },
  { day: 26, rest: true },
  {
    day: 27,
    setInfo: {
      exercises: [
        { exercise: 'air_squats', durationSeconds: 30 },
        { exercise: 'alternate_leg_lunges', durationSeconds: 30 },
        { exercise: 'down_ups', durationSeconds: 30 }
      ],
      rest_after_exercise_seconds: 60,
      repetitions: 8
    }
  },
  { day: 28, rest: true },
  {
    day: 29,
    setInfo: {
      exercises: [
        { exercise: 'plank', durationSeconds: 45 },
        { exercise: 'air_squats', durationSeconds: 45 },
        { exercise: 'knee_drives', durationSeconds: 45 },
        { exercise: 'alternate_leg_lunges', durationSeconds: 45 }
      ],
      rest_after_exercise_seconds: 15,
      repetitions: 3
    }
  },
  {
    day: 30,
    setInfo: {
      exercises: [
        { exercise: 'air_squats', durationSeconds: 60 },
        { exercise: 'knee_drives', durationSeconds: 60 },
        { exercise: 'down_ups', durationSeconds: 60 }
      ],
      rest_after_exercise_seconds: 0,
      repetitions: 1
    }
  }
]
