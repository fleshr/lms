"use server";

import {
  handleAuthFromError,
  updateUserInfo,
  type UpdateUserInfoDto,
} from "@/entities/auth";
import type { FormAction } from "@/shared/model/formAction";

export const updateUserInfoAction: FormAction<UpdateUserInfoDto> = async (
  _prevState,
  formData,
) => {
  try {
    await updateUserInfo(formData);
    return {
      success: true,
      message: "User info has been successfully updated",
    };
  } catch (e: unknown) {
    return handleAuthFromError(e);
  }
};
