import type { Meta, StoryObj } from "@storybook/nextjs";
import { NotFoundPage } from "./NotFoundPage";

const meta = {
  title: "pages/not-found/NotFoundPage",
  component: NotFoundPage,
} satisfies Meta<typeof NotFoundPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
