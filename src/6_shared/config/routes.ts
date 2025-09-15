export const routes = {
  main: "/",
  login: "/login",
  register: "/register",
  courses: {
    main: "/courses",
    byId: (courseId: string) => `/courses/${courseId}`,
  },
  lessons: {
    byOrder: (courseId: string, lessonOrder: number) => {
      return `/courses/${courseId}/lessons/${String(lessonOrder)}`;
    },
  },
  about: "/about",
  dashboard: "/dashboard",
  settings: "/settings",
};
