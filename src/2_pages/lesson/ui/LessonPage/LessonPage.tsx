import { getCourseWithLessonsCount } from "@/entities/course";
import {
  getLessonByOrder,
  LessonBreadcrumb,
  LessonNavigation,
} from "@/entities/lesson";
import { getLessonModule } from "@/entities/module";
import { MarkLessonComplete } from "@/features/lesson/mark-complete";
import { Separator } from "@/shared/ui/Separator";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";
import type { LessonPageProps } from "../../model/props";

export const LessonPage = async (props: LessonPageProps) => {
  const { params } = props;
  const { courseId, lessonOrder } = await params;

  const [course, module, lesson] = await Promise.all([
    getCourseWithLessonsCount(courseId),
    getLessonModule(courseId, Number(lessonOrder)),
    getLessonByOrder(courseId, Number(lessonOrder)),
  ]);

  if (!course || !module || !lesson) {
    notFound();
  }

  return (
    <section className="py-8">
      <header>
        <LessonBreadcrumb
          courseId={course.id}
          courseTitle={course.title}
          moduleTitle={module.title}
        />
        <h1 className="mt-3 text-3xl font-bold">{lesson.title}</h1>
      </header>
      <article className="mt-8">
        <Markdown>{lesson.content}</Markdown>
      </article>
      <Separator className="my-6" />
      <footer className="flex items-center">
        <MarkLessonComplete lessonId={lesson.id} />
        <LessonNavigation
          className="ml-auto"
          lessonOrder={lesson.order}
          lessonsCount={course.lessonsCount}
          courseId={courseId}
        />
      </footer>
    </section>
  );
};
