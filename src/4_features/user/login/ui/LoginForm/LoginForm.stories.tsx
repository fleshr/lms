import type { Meta, StoryObj } from "@storybook/nextjs";
import { LoginForm } from "./LoginForm";

const meta = {
  title: "features/user/login/LoginForm",
  component: LoginForm,
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
