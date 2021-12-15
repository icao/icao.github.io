const path = require('path')

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
    '@hover/storybook-addon-pseudo-states',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, '../')
    config.resolve.alias['@components'] = path.resolve(
      __dirname,
      '../components'
    )
    config.resolve.alias['@hooks'] = path.resolve(__dirname, '../hooks')
    config.resolve.alias['@pages'] = path.resolve(__dirname, '../pages')
    config.resolve.alias['@styles'] = path.resolve(__dirname, '../styles')
    config.resolve.alias['@assets'] = path.resolve(__dirname, '../assets')
    config.resolve.alias['@public'] = path.resolve(__dirname, '../public')

    return config
  },
}
