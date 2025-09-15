import { db } from "@/shared/config/db";
import { and, eq } from "drizzle-orm";
import { cache } from "react";
import type { Progress } from "../model/progress";
import { progress } from "../model/progress.sql";

export const getUserProgress = cache(
  async (userId: string): Promise<Progress[]> => {
    return db
      .select()
      .from(progress)
      .where(and(eq(progress.userId, userId)));
  },
);
