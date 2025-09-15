import { modules } from "@/entities/module/@x/lesson";
import { integer, pgTable, text, uuid } from "drizzle-orm/pg-core";

export const lessons = pgTable("lessons", {
  id: uuid().primaryKey().defaultRandom(),
  order: integer().notNull(),
  title: text().notNull(),
  content: text().notNull(),
  moduleId: uuid().references(() => modules.id),
});
