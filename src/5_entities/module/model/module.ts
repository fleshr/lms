import type { Lesson } from "@/entities/lesson/@x/module";
import type { InferSelectModel } from "drizzle-orm";
import { modules } from "../model/module.sql";

export type Module = Omit<InferSelectModel<typeof modules>, "courseId">;

export interface ModuleWithLessons extends Module {
  lessons: Lesson[];
}
