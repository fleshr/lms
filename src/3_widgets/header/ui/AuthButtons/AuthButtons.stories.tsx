import type { Meta, StoryObj } from "@storybook/nextjs";
import { AuthButtons } from "./AuthButtons";

const meta = {
  title: "widgets/header/AuthButtons",
  component: AuthButtons,
} satisfies Meta<typeof AuthButtons>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
