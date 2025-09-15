import { getCourse } from "@/entities/course";
import { getLessonByOrder } from "@/entities/lesson";
import type { Metadata } from "next";
import type { LessonPageProps } from "../model/props";

export const generateMetadata = async (
  props: LessonPageProps,
): Promise<Metadata> => {
  const { params } = props;
  const { courseId, lessonOrder } = await params;
  const [course, lesson] = await Promise.all([
    getCourse(courseId),
    getLessonByOrder(courseId, Number(lessonOrder)),
  ]);

  if (!course || !lesson) {
    return { title: "Unknown lesson" };
  }

  return {
    title: `${course.title} - ${lesson.title}`,
  };
};
