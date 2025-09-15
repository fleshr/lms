import type { Meta, StoryObj } from "@storybook/nextjs";
import { CompleteLessonUser } from "./CompleteLessonUser";

const meta = {
  title: "features/progress/mark-complete/CompleteLessonUser",
  component: CompleteLessonUser,
} satisfies Meta<typeof CompleteLessonUser>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Uncompleted: Story = {
  args: {
    lessonId: "1",
    isCompleted: false,
  },
};

export const Completed: Story = {
  args: {
    lessonId: "1",
    isCompleted: true,
  },
};
