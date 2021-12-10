module.exports = {
  stories: [
    '../components/**/*.stories.mdx',
    '../components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-scss',
    'storybook-addon-outline',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
}
