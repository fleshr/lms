import type { Meta, StoryObj } from "@storybook/nextjs";
import { NavigationDropdown } from "./NavigationDropdown";

const meta = {
  title: "widgets/header/NavigationDropdown",
  component: NavigationDropdown,
} satisfies Meta<typeof NavigationDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
