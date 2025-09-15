import { db } from "@/shared/config/db";
import { and, eq } from "drizzle-orm";
import { cache } from "react";
import type { Progress } from "../model/progress";
import { progress } from "../model/progress.sql";

export const getLessonProgress = cache(
  async (lessonId: string, userId: string): Promise<Progress | undefined> => {
    const [existingProgress] = await db
      .select()
      .from(progress)
      .where(and(eq(progress.userId, userId), eq(progress.lessonId, lessonId)))
      .limit(1);

    return existingProgress;
  },
);
