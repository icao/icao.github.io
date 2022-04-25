import * as NextImage from 'next/image'

/** #################################################################
 * Special configuration for use Next/Image  with storybook
 *
 * Tutorial:
 * https://dev.to/jonasmerlin/how-to-use-the-next-js-image-component-in-storybook-1415
 *
 * Github hilo del problema:
 * https://github.com/vercel/next.js/issues/18393
 *
 * Creamos nuestro propio componente customizada donde no optimice las imagenes el componente Next/Image
 *
 * Nueva solución: https://github.com/vercel/next.js/issues/18393#issuecomment-1021053885 - No pude hacerla funcionar
 * ############################################################### */

const OriginalNextImage = NextImage.default

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
})

/* ############################################################### */

/* Esta seccion la autogenera cuando se inicializa el storybook */
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
