import type { Meta, StoryObj } from "@storybook/nextjs";
import { Wrapper } from "./Wrapper";

const meta = {
  title: "shared/Wrapper",
  component: Wrapper,
} satisfies Meta<typeof Wrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <div className="h-4 bg-black" />,
  },
};
