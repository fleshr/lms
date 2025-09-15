import { getUser } from "@/entities/auth";
import { getUserProgress } from "@/entities/progress";
import { Circle, CircleCheck } from "lucide-react";

interface LessonProgressIndicatorProps {
  lessonId: string;
}

export const LessonProgressIndicator = async (
  props: LessonProgressIndicatorProps,
) => {
  const { lessonId } = props;
  const user = await getUser();

  if (!user) {
    return null;
  }

  const progress = await getUserProgress(user.id);
  const isCompleted = progress.some((p) => p.lessonId === lessonId);

  return isCompleted ? (
    <CircleCheck className="complete text-green-700" size={16} />
  ) : (
    <Circle className="text-muted-foreground" size={16} />
  );
};
