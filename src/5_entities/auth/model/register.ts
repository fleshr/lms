import { z } from "zod";
import { isPasswordSame } from "../lib/isPasswordSame/isPasswordSame";
import {
  EmailFieldSchema,
  NameFieldSchema,
  PasswordFieldSchema,
} from "./fields";

export const RegisterDtoSchema = z
  .object({
    name: NameFieldSchema,
    email: EmailFieldSchema,
    password: PasswordFieldSchema,
    confirmPassword: PasswordFieldSchema,
  })
  .superRefine(isPasswordSame("password", "confirmPassword"));

export type RegisterDto = z.infer<typeof RegisterDtoSchema>;
