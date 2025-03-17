export type Exercise = {
  name: string
  duration_sec: number
  isTransition: boolean
}

export type WorkoutDay = {
  day: number
  isRestDay: boolean
  exercises: Exercise[]
  restAfterExercise_sec: number
  repetitions: number
}

export type WorkoutData = WorkoutDay[]

export const MASTER_WORKOUT_DATA: WorkoutData = [
  {
    day: 1,
    isRestDay: false,
    exercises: [
      {
        name: 'Plank',
        duration_sec: 20,
        isTransition: false
      },
      {
        name: 'Air Squats',
        duration_sec: 20,
        isTransition: false
      },
      {
        name: 'Alternate Leg Lunges',
        duration_sec: 20,
        isTransition: false
      }
    ],
    restAfterExercise_sec: 60,
    repetitions: 5
  },
  {
    day: 2,
    isRestDay: true,
    exercises: [],
    restAfterExercise_sec: 0,
    repetitions: 0
  },
  {
    day: 3,
    isRestDay: false,
    exercises: [
      { name: 'Knee Drives', duration_sec: 30, isTransition: false },
      { name: 'Air Squats', duration_sec: 30, isTransition: false },
      { name: 'Down Ups', duration_sec: 30, isTransition: false }
    ],
    restAfterExercise_sec: 60,
    repetitions: 5
  },
  {
    day: 4,
    isRestDay: true,
    exercises: [],
    restAfterExercise_sec: 0,
    repetitions: 0
  },
  {
    day: 5,
    isRestDay: false,
    exercises: [
      {
        name: 'Knee Drives',
        duration_sec: 20,
        isTransition: false
      },
      {
        name: 'Air Squats',
        duration_sec: 20,
        isTransition: false
      },
      { name: 'Alternate Leg Lunges', duration_sec: 45, isTransition: false }
    ],
    restAfterExercise_sec: 60,
    repetitions: 6
  },
  {
    day: 6,
    isRestDay: true,
    exercises: [],
    restAfterExercise_sec: 0,
    repetitions: 0
  },
  {
    day: 7,
    isRestDay: false,
    exercises: [
      {
        name: 'Plank',
        duration_sec: 20,
        isTransition: false
      },
      {
        name: 'Air Squats',
        duration_sec: 20,
        isTransition: false
      },
      {
        name: 'Alternate Leg Lunges',
        duration_sec: 20,
        isTransition: false
      }
    ],
    restAfterExercise_sec: 60,
    repetitions: 5
  },
  {
    day: 8,
    isRestDay: true,
    exercises: [],
    restAfterExercise_sec: 0,
    repetitions: 0
  },
  {
    day: 9,
    isRestDay: false,
    exercises: [
      { name: 'Knee Drives', duration_sec: 30, isTransition: false },
      { name: 'Air Squats', duration_sec: 30, isTransition: false },
      { name: 'Down Ups', duration_sec: 30, isTransition: false }
    ],
    restAfterExercise_sec: 60,
    repetitions: 5
  },
  {
    day: 10,
    isRestDay: true,
    exercises: [],
    restAfterExercise_sec: 0,
    repetitions: 0
  },
  {
    day: 11,
    isRestDay: false,
    exercises: [
      { name: 'Plank', duration_sec: 30, isTransition: false },
      { name: 'Air Squats', duration_sec: 30, isTransition: false },
      { name: 'Alternate Leg Lunges', duration_sec: 45, isTransition: false }
    ],
    restAfterExercise_sec: 60,
    repetitions: 6
  },
  {
    day: 12,
    isRestDay: true,
    exercises: [],
    restAfterExercise_sec: 0,
    repetitions: 0
  },
  {
    day: 13,
    isRestDay: false,
    exercises: [
      { name: 'Knee Drives', duration_sec: 30, isTransition: false },
      { name: 'Air Squats', duration_sec: 30, isTransition: false },
      { name: 'Alternate Leg Lunges', duration_sec: 30, isTransition: false }
    ],
    restAfterExercise_sec: 60,
    repetitions: 6
  },
  {
    day: 14,
    isRestDay: true,
    exercises: [],
    restAfterExercise_sec: 0,
    repetitions: 0
  },
  {
    day: 15,
    isRestDay: false,
    exercises: [
      { name: 'Knee Drives', duration_sec: 30, isTransition: false },
      { name: 'Air Squats', duration_sec: 30, isTransition: false },
      { name: 'Down Ups', duration_sec: 30, isTransition: false }
    ],
    restAfterExercise_sec: 45,
    repetitions: 6
  },
  {
    day: 16,
    isRestDay: true,
    exercises: [],
    restAfterExercise_sec: 0,
    repetitions: 0
  },
  {
    day: 17,
    isRestDay: false,
    exercises: [
      { name: 'Plank', duration_sec: 45, isTransition: false },
      { name: 'Air Squats', duration_sec: 45, isTransition: false },
      { name: 'Knee Drives', duration_sec: 45, isTransition: false }
    ],
    restAfterExercise_sec: 0,
    repetitions: 3
  },
  {
    day: 18,
    isRestDay: true,
    exercises: [],
    restAfterExercise_sec: 0,
    repetitions: 0
  },
  {
    day: 19,
    isRestDay: false,
    exercises: [
      { name: 'Air Squats', duration_sec: 30, isTransition: false },
      { name: 'Alternate Leg Lunges', duration_sec: 30, isTransition: false },
      { name: 'Down Ups', duration_sec: 30, isTransition: false }
    ],
    restAfterExercise_sec: 60,
    repetitions: 6
  },
  {
    day: 20,
    isRestDay: true,
    exercises: [],
    restAfterExercise_sec: 0,
    repetitions: 0
  },
  {
    day: 21,
    isRestDay: false,
    exercises: [
      { name: 'Plank', duration_sec: 30, isTransition: false },
      { name: 'Air Squats', duration_sec: 30, isTransition: false },
      { name: 'Alternate Leg Lunges', duration_sec: 30, isTransition: false }
    ],
    restAfterExercise_sec: 60,
    repetitions: 8
  },
  {
    day: 22,
    isRestDay: true,
    exercises: [],
    restAfterExercise_sec: 0,
    repetitions: 0
  },
  {
    day: 23,
    isRestDay: false,
    exercises: [
      { name: 'Knee Drives', duration_sec: 30, isTransition: false },
      { name: 'Air Squats', duration_sec: 30, isTransition: false },
      { name: 'Down Ups', duration_sec: 30, isTransition: false }
    ],
    restAfterExercise_sec: 60,
    repetitions: 8
  },
  {
    day: 24,
    isRestDay: true,
    exercises: [],
    restAfterExercise_sec: 0,
    repetitions: 0
  },
  {
    day: 25,
    isRestDay: false,
    exercises: [
      { name: 'Plank', duration_sec: 40, isTransition: false },
      { name: 'Air Squats', duration_sec: 40, isTransition: false },
      { name: 'Knee Drives', duration_sec: 40, isTransition: false },
      { name: 'Alternate Leg Lunges', duration_sec: 40, isTransition: false }
    ],
    restAfterExercise_sec: 15,
    repetitions: 3
  },
  {
    day: 26,
    isRestDay: true,
    exercises: [],
    restAfterExercise_sec: 0,
    repetitions: 0
  },
  {
    day: 27,
    isRestDay: false,
    exercises: [
      { name: 'Air Squats', duration_sec: 30, isTransition: false },
      { name: 'Alternate Leg Lunges', duration_sec: 30, isTransition: false },
      { name: 'Down Ups', duration_sec: 30, isTransition: false }
    ],
    restAfterExercise_sec: 60,
    repetitions: 8
  },
  {
    day: 28,
    isRestDay: true,
    exercises: [],
    restAfterExercise_sec: 0,
    repetitions: 0
  },
  {
    day: 29,
    isRestDay: false,
    exercises: [
      { name: 'Plank', duration_sec: 45, isTransition: false },
      { name: 'Air Squats', duration_sec: 45, isTransition: false },
      { name: 'Knee Drives', duration_sec: 45, isTransition: false },
      { name: 'Alternate Leg Lunges', duration_sec: 45, isTransition: false }
    ],
    restAfterExercise_sec: 15,
    repetitions: 3
  },
  {
    day: 30,
    isRestDay: false,
    exercises: [
      { name: 'Air Squats', duration_sec: 60, isTransition: false },
      { name: 'Knee Drives', duration_sec: 60, isTransition: false },
      { name: 'Down Ups', duration_sec: 60, isTransition: false }
    ],
    restAfterExercise_sec: 0,
    repetitions: 1
  }
]
