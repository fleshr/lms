import type { Meta, StoryObj } from "@storybook/nextjs";
import { RegisterForm } from "./RegisterForm";

const meta = {
  title: "features/user/register/RegisterForm",
  component: RegisterForm,
} satisfies Meta<typeof RegisterForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
