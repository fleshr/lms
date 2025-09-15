import { courses } from "@/entities/course/@x/module";
import { pgTable, text, uuid } from "drizzle-orm/pg-core";

export const modules = pgTable("modules", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: text("title").notNull(),
  courseId: text("course_id").references(() => courses.id),
});
