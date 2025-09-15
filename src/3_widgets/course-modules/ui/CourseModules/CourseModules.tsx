import type { ModuleWithLessons } from "@/entities/module/model/module";
import { routes } from "@/shared/config/routes";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/ui/Accordion";
import { List, ListItem } from "@/shared/ui/List";
import { LessonProgressIndicator } from "../LessonProgressIndicator/LessonProgressIndicator";

interface CourseModulesProps {
  courseId: string;
  modules: ModuleWithLessons[];
}

export const CourseModules = (props: CourseModulesProps) => {
  const { courseId, modules } = props;

  const renderItem = (lesson: ModuleWithLessons["lessons"][0]) => {
    return (
      <ListItem
        size="sm"
        className="has-[.complete]:text-green-700"
        suffix={<LessonProgressIndicator lessonId={lesson.id} />}
        href={routes.lessons.byOrder(courseId, lesson.order)}
        label={`${String(lesson.order)}. ${lesson.title}`}
      />
    );
  };

  return (
    <Accordion
      className="w-full"
      type="multiple"
      defaultValue={[modules[0]?.id ?? ""]}
    >
      {modules.map((module) => (
        <AccordionItem key={module.id} value={module.id}>
          <AccordionTrigger>{module.title}</AccordionTrigger>
          <AccordionContent asChild>
            <List items={module.lessons} renderItem={renderItem} />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
