"use client";

import { Button } from "@/shared/ui/Button";
import { startTransition, useActionState, useCallback } from "react";
import { completeLessonAction } from "../../api/completeLesson";

interface CompleteLessonUserProps {
  lessonId: string;
  isCompleted: boolean;
}

export const CompleteLessonUser = (props: CompleteLessonUserProps) => {
  const { lessonId, isCompleted } = props;
  const [isLessonCompleted, completeLesson, isPending] = useActionState(
    completeLessonAction,
    isCompleted,
  );

  const handleComplete = useCallback(() => {
    startTransition(() => {
      completeLesson(lessonId);
    });
  }, [completeLesson, lessonId]);

  return isLessonCompleted ? (
    <span className="text-muted-foreground text-sm">
      You have complete this lesson
    </span>
  ) : (
    <Button onClick={handleComplete} disabled={isPending}>
      Mark as complete
    </Button>
  );
};
