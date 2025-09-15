"use server";

import { db } from "@/shared/config/db";
import { eq } from "drizzle-orm";
import { cache } from "react";
import type { Course } from "../model/course";
import { courses } from "../model/course.sql";

export const getCourse = cache(
  async (courseId: string): Promise<Course | undefined> => {
    const [course] = await db
      .select()
      .from(courses)
      .where(eq(courses.id, courseId))
      .limit(1);

    return course;
  },
);
