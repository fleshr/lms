import { z } from "zod";
import { PasswordFieldSchema } from "./fields";

export const ChangePasswordDtoSchema = z.object({
  currentPassword: PasswordFieldSchema,
  newPassword: PasswordFieldSchema,
});

export type ChangePasswordDto = z.infer<typeof ChangePasswordDtoSchema>;
