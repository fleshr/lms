import type { Meta, StoryObj } from "@storybook/nextjs";
import { ListItem } from "../ListItem/ListItem";
import { List } from "./List";

const meta = {
  title: "shared/List/List",
  component: List,
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [{ id: "1" }, { id: "2" }, { id: "3" }],
    emptyMessage: "No items",
    renderItem: (item) => <ListItem href="#" label={`Item ${item.id}`} />,
  },
};

export const Empty: Story = {
  args: {
    items: [],
    emptyMessage: "No items",
    renderItem: (item) => <ListItem href="#" label={`Item ${item.id}`} />,
  },
};
