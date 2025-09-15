"use server";

import {
  handleAuthFromError,
  register,
  type RegisterDto,
} from "@/entities/auth";
import { routes } from "@/shared/config/routes";
import type { FormAction } from "@/shared/model/formAction";
import { redirect, RedirectType } from "next/navigation";

export const registerAction: FormAction<RegisterDto> = async (
  _prevState,
  formData,
) => {
  try {
    await register(formData);
  } catch (e: unknown) {
    return handleAuthFromError<RegisterDto>(e, {
      USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL: ["email"],
    });
  }

  redirect(routes.main, RedirectType.replace);
};
