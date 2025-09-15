import { pgTable, text } from "drizzle-orm/pg-core";

export const courses = pgTable("courses", {
  id: text().primaryKey(),
  title: text().notNull(),
  description: text().notNull(),
});
