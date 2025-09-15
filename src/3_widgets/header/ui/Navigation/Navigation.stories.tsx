import type { Meta, StoryObj } from "@storybook/nextjs";
import { Navigation } from "./Navigation";

const meta = {
  title: "widgets/header/Navigation",
  component: Navigation,
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
