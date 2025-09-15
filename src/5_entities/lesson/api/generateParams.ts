import { courses } from "@/entities/course/@x/lesson";
import { modules } from "@/entities/module/@x/lesson";
import { db } from "@/shared/config/db";
import { eq, sql } from "drizzle-orm";
import { lessons } from "../model/lesson.sql";

export const generateParams = async () => {
  return db
    .select({
      courseId: courses.id,
      lessonOrder: sql<string>`CAST(${lessons.order} AS TEXT)`,
    })
    .from(courses)
    .innerJoin(modules, eq(courses.id, modules.courseId))
    .innerJoin(lessons, eq(modules.id, lessons.moduleId));
};
