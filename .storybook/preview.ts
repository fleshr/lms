import { withStyles } from "@/shared/lib/storybook/withStyles";
import type { Preview } from "@storybook/nextjs";

const preview: Preview = {
  decorators: [withStyles],
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};

export default preview;
