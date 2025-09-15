import type { Meta, StoryObj } from "@storybook/nextjs";
import { AboutPage } from "./AboutPage";

const meta = {
  title: "pages/about/AboutPage",
  component: AboutPage,
} satisfies Meta<typeof AboutPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
