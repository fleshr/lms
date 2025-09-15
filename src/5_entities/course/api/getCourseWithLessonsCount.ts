"use server";

import { lessons } from "@/entities/lesson/@x/course";
import { modules } from "@/entities/module/@x/course";
import { db } from "@/shared/config/db";
import { count, eq } from "drizzle-orm/sql";
import { cache } from "react";
import type { CourseWithLessonsCount } from "../model/course";
import { courses } from "../model/course.sql";

export const getCourseWithLessonsCount = cache(
  async (courseId: string): Promise<CourseWithLessonsCount | undefined> => {
    const [course] = await db
      .select({
        id: courses.id,
        title: courses.title,
        description: courses.description,
        lessonsCount: count(lessons),
      })
      .from(courses)
      .where(eq(courses.id, courseId))
      .leftJoin(modules, eq(courses.id, modules.courseId))
      .leftJoin(lessons, eq(modules.id, lessons.moduleId))
      .groupBy(courses.id)
      .limit(1);

    return course;
  },
);
