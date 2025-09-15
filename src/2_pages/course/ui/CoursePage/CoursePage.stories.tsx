import * as auth from "@/entities/auth";
import * as course from "@/entities/course";
import * as module from "@/entities/module";
import * as progress from "@/entities/progress";
import type { Meta, StoryObj } from "@storybook/nextjs";
import { createMock } from "storybook-addon-module-mock";
import { CoursePage } from "./CoursePage";

const meta = {
  title: "pages/course/CoursePage",
  component: CoursePage,
} satisfies Meta<typeof CoursePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Guest: Story = {
  args: {
    params: Promise.resolve({ courseId: "1" }),
    searchParams: Promise.resolve({}),
  },
  parameters: {
    moduleMock: {
      mock: () => {
        const coursesMock = createMock(course, "getCourseWithLessonsCount");
        coursesMock.mockResolvedValue(course.mockedCourses[0]);

        const modulesMock = createMock(module, "getModulesWithLessons");
        modulesMock.mockResolvedValue(module.mockedModules);

        return [coursesMock, modulesMock];
      },
    },
  },
};

export const User: Story = {
  args: {
    params: Promise.resolve({ courseId: "1" }),
    searchParams: Promise.resolve({}),
  },
  parameters: {
    moduleMock: {
      mock: () => {
        const getUser = createMock(auth, "getUser");
        getUser.mockResolvedValue(auth.mockedUser);

        const getUserProgressMock = createMock(progress, "getUserProgress");
        getUserProgressMock.mockResolvedValue([progress.mockedProgress]);

        const getCourseWithLessonsCount = createMock(
          course,
          "getCourseWithLessonsCount",
        );
        getCourseWithLessonsCount.mockResolvedValue(course.mockedCourses[0]);

        const modulesMock = createMock(module, "getModulesWithLessons");
        modulesMock.mockResolvedValue(module.mockedModules);

        return [getCourseWithLessonsCount, modulesMock, getUser];
      },
    },
  },
};
