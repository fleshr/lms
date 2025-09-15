import * as auth from "@/entities/auth";
import * as course from "@/entities/course";
import type { Meta, StoryObj } from "@storybook/nextjs";
import { createMock } from "storybook-addon-module-mock";
import { DashboardPage } from "./DashboardPage";

const meta = {
  title: "pages/dashboard/DashboardPage",
  component: DashboardPage,
} satisfies Meta<typeof DashboardPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    moduleMock: {
      mock: () => {
        const getUser = createMock(auth, "getUser");
        getUser.mockResolvedValue(auth.mockedUser);

        const getProgressedCourses = createMock(course, "getProgressedCourses");
        getProgressedCourses.mockResolvedValue(course.mockedCourses);

        return [getProgressedCourses, getUser];
      },
    },
  },
};
