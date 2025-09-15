import { getUser } from "@/entities/auth";
import { getLessonProgress } from "@/entities/progress";
import { CompleteLessonUser } from "../CompleteLessonUser/CompleteLessonUser";

interface MarkLessonCompleteProps {
  lessonId: string;
}

export const MarkLessonComplete = async (props: MarkLessonCompleteProps) => {
  const { lessonId } = props;
  const user = await getUser();

  if (!user) {
    return (
      <span className="text-muted-foreground text-sm">
        You can track your lessons progress after login
      </span>
    );
  }

  const progress = await getLessonProgress(lessonId, user.id);
  const isCompleted = Boolean(progress?.isCompleted);

  return <CompleteLessonUser lessonId={lessonId} isCompleted={isCompleted} />;
};
