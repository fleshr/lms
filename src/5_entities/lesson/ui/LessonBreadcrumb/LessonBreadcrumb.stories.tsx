import type { Meta, StoryObj } from "@storybook/nextjs";
import { LessonBreadcrumb } from "./LessonBreadcrumb";

const meta = {
  title: "entities/lesson/LessonBreadcrumb",
  component: LessonBreadcrumb,
} satisfies Meta<typeof LessonBreadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    courseId: "1",
    courseTitle: "Course title",
    moduleTitle: "Module title",
  },
};
