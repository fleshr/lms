import { getUser } from "@/entities/auth";
import { getProgressedCourses } from "@/entities/course";
import { routes } from "@/shared/config/routes";
import { getDevice } from "@/shared/lib/getDevice";
import { List, ListItem } from "@/shared/ui/List";
import { Section, SectionsCard } from "@/shared/ui/SectionsCard";
import { Circle, CircleCheck } from "lucide-react";
import { redirect, RedirectType } from "next/navigation";

export const DashboardPage = async () => {
  const isMobile = await getDevice("mobile");
  const user = await getUser();

  if (!user) {
    redirect(routes.login, RedirectType.replace);
  }

  const [startedCourses, completedCourses] = await Promise.all([
    getProgressedCourses(user.id, "started"),
    getProgressedCourses(user.id, "completed"),
  ]);

  return (
    <div className="mx-auto w-full max-w-4xl py-16">
      <h1 className="text-center text-3xl font-bold">Dashboard</h1>
      <SectionsCard
        className="mt-10"
        orientation={isMobile ? "vertical" : "horizontal"}
      >
        <Section className="-mx-2" title="Started">
          <List
            items={startedCourses}
            emptyMessage="No courses"
            renderItem={(course) => (
              <ListItem
                preffix={<Circle className="text-muted-foreground" size={18} />}
                label={course.title}
                href={routes.courses.byId(course.id)}
              />
            )}
          />
        </Section>
        <Section className="-mx-2" title="Completed">
          <List
            items={completedCourses}
            emptyMessage="No courses"
            renderItem={(course) => (
              <ListItem
                preffix={<CircleCheck className="text-green-700" size={18} />}
                label={course.title}
                href={routes.courses.byId(course.id)}
              />
            )}
          />
        </Section>
      </SectionsCard>
    </div>
  );
};
