import '../styles/globals.scss'

/* eslint-disable react/prop-types */
function MyApp({ Component, pageProps }) {
  console.log('haskdhjkas', typeof Component, typeof pageProps)
  return <Component {...pageProps} />
}
/* eslint-enable react/prop-types */

export default MyApp
