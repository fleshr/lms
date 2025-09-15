import * as auth from "@/entities/auth";
import * as progress from "@/entities/progress";
import type { Meta, StoryObj } from "@storybook/nextjs";
import { createMock } from "storybook-addon-module-mock";
import { LessonProgressIndicator } from "./LessonProgressIndicator";

const meta = {
  title: "widgets/course-modules/LessonProgressIndicator",
  component: LessonProgressIndicator,
} satisfies Meta<typeof LessonProgressIndicator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const UserCompleted: Story = {
  args: { lessonId: "1" },
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

export const UserNotCompleted: Story = {
  args: { lessonId: "2" },
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
