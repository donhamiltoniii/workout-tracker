export type ExerciseModel = {
  id: number;
  name: string;
  workoutId: number;
  workout: WorkoutModel;
  sets: number;
  reps: number;
  description: string;
};

export type Exercise = Pick<
  ExerciseModel,
  "id" | "name" | "description" | "reps" | "sets"
>;

export type WorkoutModel = {
  id: number;
  name: string;
  duration: string;
  exercises: ExerciseModel[];
};

export type Workout = Pick<WorkoutModel, "id" | "name" | "duration">;
