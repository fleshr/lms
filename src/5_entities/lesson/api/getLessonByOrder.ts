"use server";

import { courses } from "@/entities/course/@x/lesson";
import { modules } from "@/entities/module/@x/lesson";
import { db } from "@/shared/config/db";
import { and, eq } from "drizzle-orm";
import { cache } from "react";
import type { Lesson } from "../model/lesson";
import { lessons } from "../model/lesson.sql";

export const getLessonByOrder = cache(
  async (
    courseId: string,
    lessonOrder: number,
  ): Promise<Lesson | undefined> => {
    const [lesson] = await db
      .select({
        id: lessons.id,
        order: lessons.order,
        title: lessons.title,
        content: lessons.content,
      })
      .from(lessons)
      .innerJoin(modules, eq(lessons.moduleId, modules.id))
      .innerJoin(courses, eq(modules.courseId, courses.id))
      .where(and(eq(courses.id, courseId), eq(lessons.order, lessonOrder)))
      .limit(1);

    return lesson;
  },
);
