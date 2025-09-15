import { routes } from "@/shared/config/routes";

export const MENU_LINKS = [
  {
    label: "All Courses",
    href: routes.courses.main,
  },
  {
    label: "About Us",
    href: routes.about,
  },
] as const;
