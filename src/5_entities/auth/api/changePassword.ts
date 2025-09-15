"use server";

import { headers } from "next/headers";
import { auth } from "../config/auth";
import type { ChangePasswordDto } from "../model/changePassword";

export const changePassword = async (dto: ChangePasswordDto): Promise<void> => {
  await auth.api.changePassword({ body: dto, headers: await headers() });
};
