import type { InferSelectModel } from "drizzle-orm";
import { lessons } from "../model/lesson.sql";

export type Lesson = Omit<InferSelectModel<typeof lessons>, "moduleId">;
