import type { Meta, StoryObj } from "@storybook/nextjs";
import { mockedCourses } from "../../mock/courses";
import { CourseCard } from "./CourseCard";

const meta = {
  title: "entities/course/CourseCard",
  component: CourseCard,
} satisfies Meta<typeof CourseCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    course: mockedCourses[0]!,
  },
};
