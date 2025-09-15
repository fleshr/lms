"use server";

import { changePassword, handleAuthFromError } from "@/entities/auth";
import type { FormAction } from "@/shared/model/formAction";
import type { ChangePassWithConfirmDto } from "../model/changePassword";

export const changePasswordAction: FormAction<
  ChangePassWithConfirmDto
> = async (_prevState, formData) => {
  const { currentPassword, newPassword } = formData;

  try {
    await changePassword({ currentPassword, newPassword });
    return {
      success: true,
      message: "Password has been successfully changed",
    };
  } catch (e: unknown) {
    return handleAuthFromError<ChangePassWithConfirmDto>(e, {
      INVALID_PASSWORD: ["currentPassword"],
      PASSWORD_TOO_SHORT: ["newPassword"],
    });
  }
};
