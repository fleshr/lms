import type { Meta, StoryObj } from "@storybook/nextjs";
import { SimpleHeader } from "./SimpleHeader";

const meta = {
  title: "shared/SimpleHeader",
  component: SimpleHeader,
} satisfies Meta<typeof SimpleHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
