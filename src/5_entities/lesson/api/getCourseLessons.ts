"use server";

import { courses } from "@/entities/course/@x/lesson";
import { modules } from "@/entities/module/@x/lesson";
import { db } from "@/shared/config/db";
import { eq } from "drizzle-orm";
import { cache } from "react";
import type { Lesson } from "../model/lesson";
import { lessons } from "../model/lesson.sql";

export const getCourseLessons = cache(
  async (courseId: string): Promise<Lesson[]> => {
    return db
      .select({
        id: lessons.id,
        order: lessons.order,
        title: lessons.title,
        content: lessons.content,
      })
      .from(lessons)
      .leftJoin(modules, eq(lessons.moduleId, modules.id))
      .leftJoin(courses, eq(modules.courseId, courses.id))
      .where(eq(courses.id, courseId));
  },
);
