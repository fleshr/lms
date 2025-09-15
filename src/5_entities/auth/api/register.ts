"use server";

import { headers } from "next/headers";
import { auth } from "../config/auth";
import type { RegisterDto } from "../model/register";

export const register = async (dto: RegisterDto): Promise<void> => {
  await auth.api.signUpEmail({ body: dto, headers: await headers() });
};
