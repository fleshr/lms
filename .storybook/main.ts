import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  addons: ["storybook-addon-module-mock"],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  features: {
    experimentalRSC: true,
  },
  webpackFinal: (config) => {
    // // Ignore pg-native
    // config.plugins.push(
    //   new webpack.IgnorePlugin({
    //     resourceRegExp: /^pg-native$/,
    //   }),
    // );

    // Add fallbacks for Node core modules
    if (config.resolve && !Array.isArray(config.resolve.fallback)) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        dns: false,
      };
    }

    return config;
  },
};

export default config;
