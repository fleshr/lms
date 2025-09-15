import type { InferSelectModel } from "drizzle-orm";
import type { progress } from "./progress.sql";

export type Progress = InferSelectModel<typeof progress>;
