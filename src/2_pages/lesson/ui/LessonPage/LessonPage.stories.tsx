import * as auth from "@/entities/auth";
import * as course from "@/entities/course";
import * as lesson from "@/entities/lesson";
import * as module from "@/entities/module";
import * as progress from "@/entities/progress";
import type { Meta, StoryObj } from "@storybook/nextjs";
import { createMock } from "storybook-addon-module-mock";
import { LessonPage } from "./LessonPage";

const meta = {
  title: "pages/lesson/LessonPage",
  component: LessonPage,
} satisfies Meta<typeof LessonPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Guest: Story = {
  args: {
    params: Promise.resolve({ courseId: "1", lessonOrder: "1" }),
    searchParams: Promise.resolve({}),
  },
  parameters: {
    moduleMock: {
      mock: () => {
        const getCourseWithLessonsCount = createMock(
          course,
          "getCourseWithLessonsCount",
        );
        getCourseWithLessonsCount.mockResolvedValue(course.mockedCourses[0]);

        const getLessonModule = createMock(module, "getLessonModule");
        getLessonModule.mockResolvedValue(module.mockedModules[0]);

        const getLessonByOrder = createMock(lesson, "getLessonByOrder");
        getLessonByOrder.mockResolvedValue(lesson.mockedLessons[0]);

        return [getCourseWithLessonsCount, getLessonModule, getLessonByOrder];
      },
    },
  },
};

export const User: Story = {
  args: {
    params: Promise.resolve({ courseId: "1", lessonOrder: "1" }),
    searchParams: Promise.resolve({}),
  },
  parameters: {
    moduleMock: {
      mock: () => {
        const getUser = createMock(auth, "getUser");
        getUser.mockResolvedValue(auth.mockedUser);

        const getLessonProgressMock = createMock(progress, "getLessonProgress");
        getLessonProgressMock.mockResolvedValue(progress.mockedProgress);

        const getCourseWithLessonsCount = createMock(
          course,
          "getCourseWithLessonsCount",
        );
        getCourseWithLessonsCount.mockResolvedValue(course.mockedCourses[0]);

        const getLessonModule = createMock(module, "getLessonModule");
        getLessonModule.mockResolvedValue(module.mockedModules[0]);

        const getLessonByOrder = createMock(lesson, "getLessonByOrder");
        getLessonByOrder.mockResolvedValue(lesson.mockedLessons[0]);

        return [
          getUser,
          getCourseWithLessonsCount,
          getLessonModule,
          getLessonByOrder,
          getLessonProgressMock,
        ];
      },
    },
  },
};
