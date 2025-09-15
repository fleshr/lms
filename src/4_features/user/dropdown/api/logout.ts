"use server";

import { logout } from "@/entities/auth";
import { routes } from "@/shared/config/routes";
import { redirect } from "next/navigation";

export const logoutAction = async () => {
  try {
    await logout();
  } catch {
    redirect(routes.main);
  }
  redirect(routes.main);
};
