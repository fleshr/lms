import type { Meta, StoryObj } from "@storybook/nextjs";
import { Section } from "../Section/Section";
import { SectionsCard } from "./SectionsCard";

const meta = {
  title: "shared/SectionsCard/SectionsCard",
  component: SectionsCard,
} satisfies Meta<typeof SectionsCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Vertical: Story = {
  args: {
    orientation: "vertical",
    children: (
      <>
        <Section title="Section 1">Section content 1</Section>
        <Section title="Section 2">Section content 2</Section>
      </>
    ),
  },
};

export const Horizontal: Story = {
  args: {
    orientation: "horizontal",
    children: (
      <>
        <Section title="Section 1">Section content 1</Section>
        <Section title="Section 2">Section content 2</Section>
      </>
    ),
  },
};
