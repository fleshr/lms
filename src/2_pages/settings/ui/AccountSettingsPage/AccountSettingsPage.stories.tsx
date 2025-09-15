import * as auth from "@/entities/auth";
import type { Meta, StoryObj } from "@storybook/nextjs";
import { createMock } from "storybook-addon-module-mock";
import { AccountSettingsPage } from "./AccountSettingsPage";

const meta = {
  title: "pages/settings/AccountSettingsPage",
  component: AccountSettingsPage,
} satisfies Meta<typeof AccountSettingsPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    moduleMock: {
      mock: () => {
        const getUser = createMock(auth, "getUser");
        getUser.mockResolvedValue(auth.mockedUser);
        return [getUser];
      },
    },
  },
};
