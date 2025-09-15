import type { Meta, StoryObj } from "@storybook/nextjs";
import { Rating } from "./Rating";

const meta = {
  title: "shared/Rating",
  component: Rating,
} satisfies Meta<typeof Rating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { rating: 5 },
};
