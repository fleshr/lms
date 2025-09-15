"use server";

import { handleAuthFromError, login, type LoginDto } from "@/entities/auth";
import { routes } from "@/shared/config/routes";
import type { FormAction } from "@/shared/model/formAction";
import { redirect, RedirectType } from "next/navigation";

export const loginAction: FormAction<LoginDto> = async (
  _prevState,
  formData,
) => {
  try {
    await login(formData);
  } catch (e: unknown) {
    return handleAuthFromError<LoginDto>(e, {
      INVALID_EMAIL_OR_PASSWORD: ["email", "password"],
    });
  }

  redirect(routes.main, RedirectType.replace);
};
