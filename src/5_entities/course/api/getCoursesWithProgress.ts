"use server";

import { lessons } from "@/entities/lesson/@x/course";
import { modules } from "@/entities/module/@x/course";
import { progress } from "@/entities/progress/@x/course";
import { db } from "@/shared/config/db";
import { count, eq } from "drizzle-orm";
import { cache } from "react";
import type { CourseWithProgress } from "../model/course";
import { courses } from "../model/course.sql";

export const getCoursesWithProgress = cache(
  async (userId: string): Promise<CourseWithProgress[]> => {
    return db
      .select({
        id: courses.id,
        title: courses.title,
        description: courses.description,
        startedLessonsCount: count(lessons),
      })
      .from(courses)
      .leftJoin(modules, eq(courses.id, modules.courseId))
      .leftJoin(lessons, eq(modules.id, lessons.moduleId))
      .leftJoin(progress, eq(lessons.id, progress.lessonId))
      .where(eq(progress.userId, userId))
      .groupBy(courses.id);
  },
);
