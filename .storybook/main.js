const path = require('path')

module.exports = {
  stories: [
    '../components/**/*.stories.mdx',
    '../components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    {
      name: 'storybook-addon-next',
      options: {
        nextConfigPath: path.resolve(__dirname, '../next.config.js'),
      },
    },
    '@storybook/addon-essentials', // Muestra varios errores en consola, pero son exclusivos del plugin, NO ES EL PROYECTO
    'storybook-addon-outline',
    // '@storybook/preset-scss', // Solucionaba el problema de las importaciones de los archivos SCSS:  @storybook/preset-scss
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
  // Nueva forma de disponer los estaticos
  staticDirs: ['../public', '../public/images'],
}
