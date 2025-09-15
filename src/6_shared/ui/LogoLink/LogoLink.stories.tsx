import type { Meta, StoryObj } from "@storybook/nextjs";
import { LogoLink } from "./LogoLink";

const meta = {
  title: "shared/LogoLink",
  component: LogoLink,
} satisfies Meta<typeof LogoLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
