"use server";

import { lessons } from "@/entities/lesson/@x/course";
import { modules } from "@/entities/module/@x/course";
import { db } from "@/shared/config/db";
import { count, eq } from "drizzle-orm/sql";
import { cache } from "react";
import type { CourseWithLessonsCount } from "../model/course";
import { courses } from "../model/course.sql";

export const getCoursesWithLessonsCount = cache(
  async (): Promise<CourseWithLessonsCount[]> => {
    return db
      .select({
        id: courses.id,
        title: courses.title,
        description: courses.description,
        lessonsCount: count(lessons),
      })
      .from(courses)
      .leftJoin(modules, eq(courses.id, modules.courseId))
      .leftJoin(lessons, eq(modules.id, lessons.moduleId))
      .groupBy(courses.id);
  },
);
