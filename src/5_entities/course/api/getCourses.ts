"use server";

import { db } from "@/shared/config/db";
import { cache } from "react";
import type { Course } from "../model/course";
import { courses } from "../model/course.sql";

export const getCourses = cache(async (): Promise<Course[]> => {
  return db.select().from(courses);
});
