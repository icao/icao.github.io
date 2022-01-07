import Head from 'next/head'
import Header from '@components/Common/Header/Header'
import Home from '@components/Layout/Home/Home'
import Title from '@components/Common/Title/Title'
import Projects from '@components/Layout/Projects/Projects'
import Footer from '@components/Layout/Footer/Footer'

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
        <meta name="theme-color" content="#141414" />
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
        <div className="container vieport__full">
          <section id="about" className=" section">
            <Title
              text="websites"
              textEmphasis="The best"
              positionEmphasisBefore
            />
          </section>
        </div>
        <div className="container vieport__full">
          <section id="skills" className=" section">
            <Title
              text="websites"
              textEmphasis="The best"
              positionEmphasisBefore
            />
            <br />
            <br />
            <br />
          </section>
        </div>

        <div id="resume" className="container vieport__full">
          <section className="section">
            <Title
              text="error"
              textEmphasis="The best"
              positionEmphasisBefore
            />
          </section>
        </div>
        <div id="projects" className="container">
          <section className="section">
            <div className="section__title">
              <Title
                text="Proyectos"
                textEmphasis="Mis"
                positionEmphasisBefore
              />
            </div>
            <Projects />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
