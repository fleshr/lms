import { getCourseWithLessonsCount } from "@/entities/course";
import { getModulesWithLessons } from "@/entities/module";
import { CourseModules } from "@/widgets/course-modules";
import { notFound } from "next/navigation";
import type { CoursePageProps } from "../../model/props";

export const CoursePage = async (props: CoursePageProps) => {
  const { params } = props;
  const { courseId } = await params;

  const [course, modules] = await Promise.all([
    getCourseWithLessonsCount(courseId),
    getModulesWithLessons(courseId),
  ]);

  if (!course) {
    notFound();
  }

  return (
    <section className="mx-auto w-full max-w-3xl py-16">
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold">{course.title}</h1>
        <p className="text-muted-foreground mt-2">{course.description}</p>
        <p className="text-muted-foreground mt-2 text-sm">
          {course.lessonsCount} lessons total
        </p>
      </header>
      <CourseModules courseId={courseId} modules={modules} />
    </section>
  );
};
