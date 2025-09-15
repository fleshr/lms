"use server";

import { courses } from "@/entities/course/@x/module";
import { lessons } from "@/entities/lesson/@x/module";
import { db } from "@/shared/config/db";
import { and, eq } from "drizzle-orm";
import { cache } from "react";
import type { Module } from "../model/module";
import { modules } from "../model/module.sql";

export const getLessonModule = cache(
  async (
    courseId: string,
    lessonOrder: number,
  ): Promise<Module | undefined> => {
    const [module] = await db
      .select({
        id: modules.id,
        title: modules.title,
      })
      .from(modules)
      .innerJoin(courses, eq(courses.id, courseId))
      .innerJoin(lessons, eq(lessons.order, lessonOrder))
      .where(
        and(eq(lessons.moduleId, modules.id), eq(modules.courseId, courses.id)),
      )
      .limit(1);

    return module;
  },
);
