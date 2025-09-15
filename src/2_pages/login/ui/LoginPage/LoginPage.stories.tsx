import type { Meta, StoryObj } from "@storybook/nextjs";
import { LoginPage } from "./LoginPage";

const meta = {
  title: "pages/login/LoginPage",
  component: LoginPage,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof LoginPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
