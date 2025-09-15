import { geist } from "@/app/styles/fonts";
import "@/app/styles/globals.css";
import type { Decorator } from "@storybook/nextjs";

export const withStyles: Decorator = (Story) => (
  <>
    <style>{` :root { --font-geist: ${geist.style.fontFamily} } `}</style>
    <Story />
  </>
);
