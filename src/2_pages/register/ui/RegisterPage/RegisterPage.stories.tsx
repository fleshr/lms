import type { Meta, StoryObj } from "@storybook/nextjs";
import { RegisterPage } from "./RegisterPage";

const meta = {
  title: "pages/register/RegisterPage",
  component: RegisterPage,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof RegisterPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
