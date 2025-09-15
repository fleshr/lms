import type { Meta, StoryObj } from "@storybook/nextjs";
import { Section } from "./Section";

const meta = {
  title: "shared/SectionsCard/Section",
  component: Section,
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithTitle: Story = {
  args: {
    title: "Section title",
    children: "Section content",
  },
};

export const WithoutTitle: Story = {
  args: {
    children: "Section content",
  },
};
