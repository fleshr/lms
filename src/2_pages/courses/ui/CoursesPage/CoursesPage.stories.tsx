import * as course from "@/entities/course";
import type { Meta, StoryObj } from "@storybook/nextjs";
import { createMock } from "storybook-addon-module-mock";
import { CoursesPage } from "./CoursesPage";

const meta = {
  title: "pages/courses/CoursesPage",
  component: CoursesPage,
} satisfies Meta<typeof CoursesPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    moduleMock: {
      mock: () => {
        const getCoursesWithLessonsCount = createMock(
          course,
          "getCoursesWithLessonsCount",
        );
        getCoursesWithLessonsCount.mockResolvedValue(course.mockedCourses);

        return [getCoursesWithLessonsCount];
      },
    },
  },
};
