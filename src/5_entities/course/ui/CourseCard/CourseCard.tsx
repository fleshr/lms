import { routes } from "@/shared/config/routes";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/Card";
import Link from "next/link";
import type { CourseWithLessonsCount } from "../../model/course";

interface CourseCardProps {
  course: CourseWithLessonsCount;
}

export const CourseCard = (props: CourseCardProps) => {
  const { course } = props;

  return (
    <Link href={routes.courses.byId(course.id)}>
      <Card className="h-full transition-shadow hover:shadow-lg">
        <CardHeader>
          <CardTitle>{course.title}</CardTitle>
          <CardDescription>{course.description}</CardDescription>
        </CardHeader>
        <CardFooter className="text-muted-foreground mt-auto text-xs">
          {course.lessonsCount} Lessons
        </CardFooter>
      </Card>
    </Link>
  );
};
