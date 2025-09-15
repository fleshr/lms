"use server";

import { cache } from "react";
import type { Course } from "../model/course";
import { getCoursesWithLessonsCount } from "./getCoursesWithLessonsCount";
import { getCoursesWithProgress } from "./getCoursesWithProgress";

export const getProgressedCourses = cache(
  async (
    userId: string,
    status: "started" | "completed",
  ): Promise<Course[]> => {
    const allCourses = await getCoursesWithLessonsCount();
    const coursesWithProgress = await getCoursesWithProgress(userId);

    return allCourses.filter((course) => {
      const matchedCourse = coursesWithProgress.find(
        (courseWithProgress) => courseWithProgress.id === course.id,
      );

      return (
        matchedCourse &&
        (status === "started"
          ? matchedCourse.startedLessonsCount > 0 &&
            matchedCourse.startedLessonsCount < course.lessonsCount
          : matchedCourse.startedLessonsCount === course.lessonsCount)
      );
    });
  },
);
