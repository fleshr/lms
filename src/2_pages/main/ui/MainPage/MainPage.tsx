import { CoursesGrid, getCoursesWithLessonsCount } from "@/entities/course";
import { routes } from "@/shared/config/routes";
import { Button } from "@/shared/ui/Button";
import Link from "next/link";

export const MainPage = async () => {
  const courses = await getCoursesWithLessonsCount();

  return (
    <div className="flex flex-col gap-16 py-24">
      <section className="w-full text-center">
        <h1 className="mb-4 text-5xl font-bold">Learn Online with Ease</h1>
        <p className="text-muted-foreground mb-6 text-lg">
          Courses with progress tracking and reviews
        </p>
      </section>
      <section className="flex w-full flex-col items-center gap-10">
        <h2 className="text-center text-2xl font-bold">Popular Courses</h2>
        <CoursesGrid courses={courses.slice(0, 4)} />
        <Button size="lg" asChild variant="outline">
          <Link href={routes.courses.main}>View All Courses</Link>
        </Button>
      </section>
    </div>
  );
};
