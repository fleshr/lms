import { CoursesGrid, getCoursesWithLessonsCount } from "@/entities/course";

export const CoursesPage = async () => {
  const courses = await getCoursesWithLessonsCount();

  return (
    <section className="py-16">
      <h1 className="text-center text-3xl font-bold">All Courses</h1>
      <CoursesGrid className="mt-10" courses={courses} />
    </section>
  );
};
