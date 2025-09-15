import type { FormState } from "@/shared/model/formState";
import { APIError } from "better-auth";
import type { FieldErrors, FieldValues } from "react-hook-form";
import type { ErrorCodes } from "../../model/errorCodes";
import { isAuthErrorCode } from "../isAuthErrorCode";

export const handleAuthFromError = <T extends FieldValues>(
  error: unknown,
  fieldMap?: Partial<Record<ErrorCodes, (keyof T)[]>>,
): FormState<T> => {
  if (!(error instanceof APIError)) {
    return { success: false, message: "Something went wrong" };
  }

  const code = error.body?.code;

  if (code && isAuthErrorCode(code) && fieldMap?.[code]) {
    const errors = fieldMap[code].reduce<FieldErrors<T>>((acc, field) => {
      acc[field] = {
        type: "required",
        message: error.message,
      } as FieldErrors<T>[keyof T];

      return acc;
    }, {});

    return { success: false, errors };
  }

  return { success: false, message: error.message };
};
