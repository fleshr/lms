"use server";

import { getUser } from "@/entities/auth";
import { addProgress, getProgress } from "@/entities/progress";
import { routes } from "@/shared/config/routes";
import { revalidatePath } from "next/cache";

export const completeLessonAction = async (
  state: boolean,
  lessonId: string,
): Promise<boolean> => {
  if (state) {
    return true;
  }

  const existingUser = await getUser();

  if (!existingUser) {
    return false;
  }

  const existingProgress = await getProgress(existingUser.id, lessonId);

  if (existingProgress) {
    return true;
  }

  try {
    await addProgress(existingUser.id, lessonId);
    revalidatePath(routes.courses.byId("[courseId]"), "page");
    return true;
  } catch {
    return false;
  }
};
