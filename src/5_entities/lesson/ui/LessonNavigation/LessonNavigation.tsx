import { routes } from "@/shared/config/routes";
import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/Button";
import Link from "next/link";

interface LessonNavigationProps {
  className?: string;
  lessonOrder: number;
  lessonsCount: number;
  courseId: string;
}

export const LessonNavigation = (props: LessonNavigationProps) => {
  const { lessonOrder, lessonsCount, courseId, className } = props;

  return (
    <div className={cn("flex gap-4", className)}>
      {lessonOrder > 1 && (
        <Button variant="outline" asChild>
          <Link href={routes.lessons.byOrder(courseId, lessonOrder - 1)}>
            Previous
          </Link>
        </Button>
      )}
      {lessonOrder < lessonsCount && (
        <Button variant="outline" asChild>
          <Link href={routes.lessons.byOrder(courseId, lessonOrder + 1)}>
            Next
          </Link>
        </Button>
      )}
      {lessonOrder === lessonsCount && (
        <Button variant="outline" asChild>
          <Link href={routes.courses.byId(courseId)}>Finish</Link>
        </Button>
      )}
    </div>
  );
};
