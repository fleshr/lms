import * as auth from "@/entities/auth";
import * as progress from "@/entities/progress";
import type { Meta, StoryObj } from "@storybook/nextjs";
import { createMock } from "storybook-addon-module-mock";
import { MarkLessonComplete } from "./MarkLessonComplete";

const meta = {
  title: "features/progress/mark-complete/MarkLessonComplete",
  component: MarkLessonComplete,
} satisfies Meta<typeof MarkLessonComplete>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Guest: Story = {
  args: { lessonId: "1" },
};

export const User: Story = {
  args: { lessonId: "1" },
  parameters: {
    moduleMock: {
      mock: () => {
        const getUserMock = createMock(auth, "getUser");
        getUserMock.mockResolvedValue(auth.mockedUser);

        const getLessonProgressMock = createMock(progress, "getLessonProgress");
        getLessonProgressMock.mockResolvedValue(undefined);

        return [getUserMock, getLessonProgressMock];
      },
    },
  },
};
