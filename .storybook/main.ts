import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  "stories": [
    "../**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../**/*.mdx"
  ],
  "addons": [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-links"
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },
  "docs": {},
  "staticDirs": ["../public"],
  "viteFinal": async (config) => {
    // Configure base path for GitHub Pages deployment
    // This will be /ui/ when deployed to GitHub Pages
    if (process.env.NODE_ENV === 'production') {
      config.base = '/ui/';
    }
    return config;
  }
};
export default config;