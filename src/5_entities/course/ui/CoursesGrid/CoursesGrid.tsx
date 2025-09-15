import { cn } from "@/shared/lib/utils";
import type { CourseWithLessonsCount } from "../../model/course";
import { CourseCard } from "../CourseCard/CourseCard";

interface CoursesGridProps {
  className?: string;
  courses: CourseWithLessonsCount[];
}

export const CoursesGrid = (props: CoursesGridProps) => {
  const { className, courses } = props;

  return (
    <div
      className={cn(
        "grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4",
        className,
      )}
    >
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};
