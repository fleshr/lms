import type { Meta, StoryObj } from "@storybook/nextjs";
import { ListItem } from "./ListItem";

const meta = {
  title: "shared/List/ListItem",
  component: ListItem,
} satisfies Meta<typeof ListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    preffix: "preffix",
    suffix: "suffix",
    label: "Label",
    href: "#",
  },
};
