import { user } from "@/entities/auth/@x/progress";
import { lessons } from "@/entities/lesson/@x/progress";
import { boolean, pgTable, text, uuid } from "drizzle-orm/pg-core";

export const progress = pgTable("progress", {
  id: uuid("id").primaryKey().defaultRandom(),
  isCompleted: boolean("is_completed").notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id),
  lessonId: uuid("lesson_id")
    .notNull()
    .references(() => lessons.id),
});
