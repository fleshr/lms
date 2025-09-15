import { getStoryFile } from "@testplane/storybook";
import path from "path";
import type { ConfigInput } from "testplane";

export default {
  gridUrl: "local",
  browsers: {
    chrome: {
      headless: true,
      desiredCapabilities: {
        browserName: "chrome",
      },
    },
  },
  plugins: {
    "html-reporter/testplane": {},
    "@testplane/storybook": {
      remoteStorybookUrl: "http://localhost:6006",
    },
  },
  screenshotsDir: (test) => {
    const relativeStoryFilePath = getStoryFile(test);
    const relativeStoryFileDirPath = path.dirname(relativeStoryFilePath);

    return path.join(
      relativeStoryFileDirPath,
      "screens",
      test.id,
      test.browserId,
    );
  },
} satisfies ConfigInput;
