import * as auth from "@/entities/auth";
import { mockedModules } from "@/entities/module";
import * as progress from "@/entities/progress";
import type { Meta, StoryObj } from "@storybook/nextjs";
import { createMock } from "storybook-addon-module-mock";
import { CourseModules } from "./CourseModules";

const meta = {
  title: "widgets/course-modules/CourseModules",
  component: CourseModules,
} satisfies Meta<typeof CourseModules>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithoutProgress: Story = {
  args: {
    courseId: "1",
    modules: mockedModules,
  },
};

export const WithProgress: Story = {
  args: {
    courseId: "1",
    modules: mockedModules,
  },
  parameters: {
    moduleMock: {
      mock: () => {
        const getUserMock = createMock(auth, "getUser");
        getUserMock.mockResolvedValue(auth.mockedUser);

        const getUserProgressMock = createMock(progress, "getUserProgress");
        getUserProgressMock.mockResolvedValue([progress.mockedProgress]);

        return [getUserMock, getUserProgressMock];
      },
    },
  },
};
