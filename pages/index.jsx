import Head from 'next/head'
import Header from '../components/Header/Header'

export default function Index() {
  return (
    <div>
      <Head>
        <title>César aparicio - icao - Front End Developer</title>
        <meta name="description" content="I am a Front End Developer and Design Lover" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>


      <Header />
      <main>
        <br /><br /><br /><br /><br /><br />
        <p >
          Refactor web <a href="https://icao.github.io/">icao</a>
        </p>

      </main>


    </div>
  )
}
