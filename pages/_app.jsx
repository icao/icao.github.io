import '../styles/globals.scss'

/* eslint-disable react/prop-types */
function MyApp({ Component, pageProps }) {
  /* eslint-enable react/prop-types */
  return <Component {...pageProps} />
}

export default MyApp
