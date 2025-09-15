"use server";

import { headers } from "next/headers";
import { auth } from "../config/auth";
import type { UpdateUserInfoDto } from "../model/updateUserInfo";

export const updateUserInfo = async (dto: UpdateUserInfoDto): Promise<void> => {
  await auth.api.updateUser({ body: dto, headers: await headers() });
};
