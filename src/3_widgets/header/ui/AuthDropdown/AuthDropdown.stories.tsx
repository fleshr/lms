import type { Meta, StoryObj } from "@storybook/nextjs";
import { AuthDropdown } from "./AuthDropdown";

const meta = {
  title: "widgets/header/AuthDropdown",
  component: AuthDropdown,
} satisfies Meta<typeof AuthDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
