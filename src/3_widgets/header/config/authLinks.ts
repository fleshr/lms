import { routes } from "@/shared/config/routes";

export const AUTH_LINKS = [
  {
    label: "Log In",
    href: routes.login,
    variant: "outline",
  },
  {
    label: "Sign Up",
    href: routes.register,
    variant: "default",
  },
] as const;
