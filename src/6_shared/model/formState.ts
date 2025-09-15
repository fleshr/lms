import type { FieldErrors, FieldValues } from "react-hook-form";

export interface FormState<T extends FieldValues> {
  success: boolean;
  message?: string;
  errors?: FieldErrors<T>;
}
