import type { Meta, StoryObj } from "@storybook/nextjs";
import { LessonNavigation } from "./LessonNavigation";

const meta = {
  title: "entities/lesson/LessonNavigation",
  component: LessonNavigation,
} satisfies Meta<typeof LessonNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FirstLesson: Story = {
  args: {
    lessonOrder: 1,
    lessonsCount: 3,
    courseId: "1",
  },
};

export const BetweenLesson: Story = {
  args: {
    lessonOrder: 2,
    lessonsCount: 3,
    courseId: "1",
  },
};

export const LastLesson: Story = {
  args: {
    lessonOrder: 3,
    lessonsCount: 3,
    courseId: "1",
  },
};
