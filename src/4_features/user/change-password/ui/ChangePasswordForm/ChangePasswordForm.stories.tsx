import type { Meta, StoryObj } from "@storybook/nextjs";
import { ChangePasswordForm } from "./ChangePasswordForm";

const meta = {
  title: "features/user/change-password/ChangePasswordForm",
  component: ChangePasswordForm,
} satisfies Meta<typeof ChangePasswordForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
