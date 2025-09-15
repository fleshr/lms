"use server";

import { db } from "@/shared/config/db";
import { progress } from "../model/progress.sql";

export const addProgress = async (
  userId: string,
  lessonId: string,
): Promise<void> => {
  await db.insert(progress).values({
    userId,
    lessonId,
    isCompleted: true,
  });
};
