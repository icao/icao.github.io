import Head from 'next/head'
import Header from '@components/Common/Header/Header'
import Home from '@components/Layout/Home/Home'
import Title from '@components/Common/Title/Title'
import Card from '@components/Common/Card/Card'

export default function Index() {
  return (
    <div>
      <Head>
        <title>icao | César aparicio | Front End Developer</title>
        <meta
          name="description"
          content="I am a Front End Developer and Design Lover"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#181919" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <main>
        <Home />
        <section id="about" className="container vieport__full">
          <Title
            text="websites"
            textEmphasis="The best"
            positionEmphasisBefore
          />
        </section>
        <section id="skills" className="container vieport__full">
          <Title
            text="websites"
            textEmphasis="The best"
            positionEmphasisBefore
          />
          <br />
          <br />
          <br />

          <section className="colection">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </section>
        </section>
        <section id="projects" className="container vieport__full">
          <Title
            text="websites"
            textEmphasis="The best"
            positionEmphasisBefore
          />
        </section>
        <section id="resume" className="container vieport__full">
          <Title
            text="websites"
            textEmphasis="The best"
            positionEmphasisBefore
          />
        </section>
      </main>
    </div>
  )
}
