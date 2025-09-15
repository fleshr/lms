import type { Meta, StoryObj } from "@storybook/nextjs";
import { mockedCourses } from "../../mock/courses";
import { CoursesGrid } from "./CoursesGrid";

const meta = {
  title: "entities/course/CoursesGrid",
  component: CoursesGrid,
} satisfies Meta<typeof CoursesGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    courses: mockedCourses,
  },
};
