import { getCourse } from "@/entities/course";
import type { Metadata } from "next";
import type { CoursePageProps } from "../model/props";

export const generateMetadata = async (
  props: CoursePageProps,
): Promise<Metadata> => {
  const { params } = props;
  const { courseId } = await params;
  const course = await getCourse(courseId);

  if (!course) {
    return { title: "Unknown course" };
  }

  return {
    title: course.title,
    description: course.description,
  };
};
