import { Exercise, Workout } from "@/types";
import { Request, Response, Router } from "express";

import { db } from "@/db";

const router: Router = Router();

router.get("/", async (_req: Request, res: Response): Promise<void> => {
  const exercises: Exercise[] = await db.exercise.findMany({
    include: { workout: true },
  });
  const workouts: Workout[] = await db.workout.findMany();

  res.render("home", { exercises, workouts });
});

export { router as homeRouter };
