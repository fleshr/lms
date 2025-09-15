import {
  ChangePasswordDtoSchema,
  isPasswordSame,
  PasswordFieldSchema,
} from "@/entities/auth";
import { z } from "zod";

export const ChangePassWithConfirmDtoSchema = ChangePasswordDtoSchema.extend({
  confirmPassword: PasswordFieldSchema,
}).superRefine(isPasswordSame("newPassword", "confirmPassword"));

export type ChangePassWithConfirmDto = z.infer<
  typeof ChangePassWithConfirmDtoSchema
>;
