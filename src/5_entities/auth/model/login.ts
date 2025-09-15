import { z } from "zod";
import { EmailFieldSchema, PasswordFieldSchema } from "./fields";

export const LoginDtoSchema = z.object({
  email: EmailFieldSchema,
  password: PasswordFieldSchema,
});

export type LoginDto = z.infer<typeof LoginDtoSchema>;
