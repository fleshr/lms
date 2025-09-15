"use server";

import { lessons } from "@/entities/lesson/@x/module";
import { db } from "@/shared/config/db";
import { eq } from "drizzle-orm/sql";
import { cache } from "react";
import type { ModuleWithLessons } from "../model/module";
import { modules } from "../model/module.sql";

export const getModulesWithLessons = cache(
  async (courseId: string): Promise<ModuleWithLessons[]> => {
    const rows = await db
      .select({
        module: {
          id: modules.id,
          title: modules.title,
        },
        lesson: {
          id: lessons.id,
          order: lessons.order,
          title: lessons.title,
          content: lessons.content,
        },
      })
      .from(modules)
      .where(eq(modules.courseId, courseId))
      .leftJoin(lessons, eq(modules.id, lessons.moduleId));

    const result = rows.reduce<Record<string, ModuleWithLessons>>(
      (acc, row) => {
        const { module, lesson } = row;

        acc[module.id] ??= { ...module, lessons: [] };

        if (lesson) {
          acc[module.id]?.lessons.push(lesson);
        }

        return acc;
      },
      {},
    );

    return Object.values(result);
  },
);
