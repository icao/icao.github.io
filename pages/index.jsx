import { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import Header from '@components/Common/Header/Header'
import Home from '@components/Layout/Home/Home'
import Title from '@components/Common/Title/Title'
import Projects from '@components/Layout/Projects/Projects'
import Footer from '@components/Layout/Footer/Footer'

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

      <Header transparent={isFooterIntersected} />

      <main>
        <Home />

        <div id="about">
          <div className="container vieport__full">
            <section className=" section">
              <Title text="about" textEmphasis="The " positionEmphasisBefore />
            </section>
          </div>
        </div>

        <div id="skills">
          <div className="container vieport__full">
            <section className=" section">
              <Title text="skills" textEmphasis="The" positionEmphasisBefore />
              <br />
              <br />
              <br />
            </section>
          </div>
        </div>
        <div id="resume" className="container vieport__full">
          <section className="section">
            <Title text="resume" textEmphasis="The" positionEmphasisBefore />
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

      <div ref={refFooter}>
        <Footer />
      </div>
    </div>
  )
}
