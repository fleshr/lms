"use server";

import { headers } from "next/headers";
import { auth } from "../config/auth";

export const logout = async (): Promise<void> => {
  await auth.api.signOut({ headers: await headers() });
};
