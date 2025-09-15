import type { Meta, StoryObj } from "@storybook/nextjs";
import { UserDropdown } from "./UserDropdown";

const meta = {
  title: "features/user/dropdown/UserDropdown",
  component: UserDropdown,
} satisfies Meta<typeof UserDropdown>;

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
