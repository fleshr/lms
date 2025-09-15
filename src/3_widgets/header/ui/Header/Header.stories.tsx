import * as auth from "@/entities/auth";
import type { Meta, StoryObj } from "@storybook/nextjs";
import { createMock } from "storybook-addon-module-mock";
import { Header } from "./Header";

const meta = {
  title: "widgets/header/Header",
  component: Header,
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Guest: Story = {
  parameters: {
    moduleMock: {
      mock: () => {
        const getUser = createMock(auth, "getUser");
        getUser.mockResolvedValue(undefined);
        return [getUser];
      },
    },
  },
};

export const User: Story = {
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
