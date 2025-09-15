import { db } from "@/shared/config/db";
import { courses } from "../model/course.sql";

export const generateParams = async () => {
  return db.select({ courseId: courses.id }).from(courses);
};
