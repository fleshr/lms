import { routes } from "@/shared/config/routes";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/shared/ui/Breadcrumb";
import Link from "next/link";

interface LessonBreadcrumbProps {
  courseId: string;
  courseTitle: string;
  moduleTitle: string;
}

export const LessonBreadcrumb = (props: LessonBreadcrumbProps) => {
  const { courseId, courseTitle, moduleTitle } = props;

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href={routes.courses.byId(courseId)}>{courseTitle}</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>{moduleTitle}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};
