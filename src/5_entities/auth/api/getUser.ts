"use server";

import { headers } from "next/headers";
import { cache } from "react";
import { auth } from "../config/auth";
import { mapUser } from "../lib/mapUser/mapUser";
import type { User } from "../model/user";

export const getUser = cache(async (): Promise<User | undefined> => {
  const session = await auth.api.getSession({ headers: await headers() });
  return session?.user && mapUser(session.user);
});
