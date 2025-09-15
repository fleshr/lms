import type { Meta, StoryObj } from "@storybook/nextjs";
import { UpdateUserInfoForm } from "./UpdateUserInfoForm";

const meta = {
  title: "features/user/update-info/UpdateUserInfoForm",
  component: UpdateUserInfoForm,
} satisfies Meta<typeof UpdateUserInfoForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    user: {
      id: "1",
      name: "John Doe",
      email: "john.doe@example.com",
    },
  },
};
