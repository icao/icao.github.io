import { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import Header from '@components/Common/Header/Header'
import Home from '@components/Layout/Home/Home'
import Title from '@components/Common/Title/Title'
import Projects from '@components/Layout/Projects/Projects'
import Footer from '@components/Layout/Footer/Footer'
import Hero from '@components/Layout/Hero/Hero'
import Legend from '@components/Common/Legend/Legend'
import Icao from '@components/Layout/Icao/Icao'
import Skills from '@components/Layout/Skills/Skills'
import Experience from '@components/Layout/Experience/Experience'
import CvBanner from '@components/Layout/CvBanner/CvBanner'

export default function Index() {
  const refFooter = useRef(null)
  const [isFooterIntersected, setIsFooterIntersected] = useState(false)

  function callback(entries) {
    if (entries[0].isIntersecting) {
      setIsFooterIntersected(true)
    } else {
      setIsFooterIntersected(false)
    }
  }
  const options = {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.9,
  }

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options)

    if (refFooter.current) {
      observer.observe(refFooter.current)
    }

    return () => {
      if (refFooter.current) {
        observer.unobserve(refFooter.current)
      }
    }
  }, [refFooter, options])

  return (
    <div>
      <Head>
        <title>ICAO | César aparicio | Front End Developer</title>
        <meta
          name="description"
          content="I am a Front End Developer and Design Lover"
        />
        <link rel="icon" href="/favicon.png" />
        <meta name="theme-color" content="#141414" />
      </Head>
      <Header transparent={isFooterIntersected} />
      <main>
        <Home />
        <div id="icao">
          <div className="container ">
            <section className="section">
              <div className="section__title">
                <Title
                  text="Sobre mi ›"
                  textEmphasis="ICAO"
                  positionEmphasisAfter
                />
              </div>
              <Icao />
            </section>
          </div>
        </div>

        {/* <Hero>
          <div className="container">
            <Legend text="Cuando yo cambio, el mundo cambia" center />
          </div>
        </Hero> */}

        <div id="skills">
          <div className="container ">
            <section className="section">
              <div className="section__title">
                <Title
                  text="Habilidades"
                  textEmphasis="Mis"
                  positionEmphasisBefore
                />
              </div>
              <Skills />
            </section>
          </div>
        </div>

        <div id="resume">
          <div className="container ">
            <section className="section">
              <div className="section__title">
                <Title
                  text="Experiencia"
                  textEmphasis="Mi"
                  positionEmphasisBefore
                />
              </div>
              <Experience />
            </section>
          </div>
        </div>

        <Hero>
          <CvBanner />
        </Hero>

        <div id="projects">
          <div className="container ">
            <section className="section section--last">
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
        </div>
        <Hero>
          <div className="container">
            <Legend
              text="Levantate una y otra vez, hasta que los coorderos se conviertan en
          leones."
              author="Robin Hood - Movie 2010"
              right
            />
          </div>
        </Hero>
      </main>
      <div ref={refFooter}>
        <Footer />
      </div>
      {/* Uncomment this line to debug the intersection observer */}
      {/* <script src="https://unpkg.com/intersection-observer-debugger" /> */}
    </div>
  )
}
