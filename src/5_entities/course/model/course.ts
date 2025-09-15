import type { InferSelectModel } from "drizzle-orm";
import { courses } from "./course.sql";

export type Course = InferSelectModel<typeof courses>;

export interface CourseWithLessonsCount extends Course {
  lessonsCount: number;
}

export interface CourseWithProgress extends Course {
  startedLessonsCount: number;
}
