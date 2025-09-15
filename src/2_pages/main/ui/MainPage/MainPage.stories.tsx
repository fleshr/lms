import * as course from "@/entities/course";
import type { Meta, StoryObj } from "@storybook/nextjs";
import { createMock } from "storybook-addon-module-mock";
import { MainPage } from "./MainPage";

const meta = {
  title: "pages/main/MainPage",
  component: MainPage,
} satisfies Meta<typeof MainPage>;

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
