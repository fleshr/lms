"use server";

import { headers } from "next/headers";
import { auth } from "../config/auth";
import type { LoginDto } from "../model/login";

export const login = async (dto: LoginDto): Promise<void> => {
  await auth.api.signInEmail({ body: dto, headers: await headers() });
};
