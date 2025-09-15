import { z } from "zod";
import { ImageFieldSchema, NameFieldSchema } from "./fields";

export const UpdateUserInfoDtoSchema = z.object({
  name: NameFieldSchema,
  image: ImageFieldSchema,
});

export type UpdateUserInfoDto = z.infer<typeof UpdateUserInfoDtoSchema>;
