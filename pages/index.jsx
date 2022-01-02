import { useState } from 'react'
import Head from 'next/head'
import Header from '@components/Common/Header/Header'
import Home from '@components/Layout/Home/Home'
import Title from '@components/Common/Title/Title'
import Card from '@components/Common/Card/Card'
import Modal from '@components/Common/Modal/Modal'

export default function Index() {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const projects = [
    {
      id: 'ICAO01',
      urlImage: '/images/photo01.jpeg',
      title: 'The player winner',
      ramonas: '/public/images/photo04.jpg',
    },
    {
      id: 'ICAO02',
      urlImage: '/images/photo02.jpeg',
      title: 'VSCODE Extension',
      ramonas: '/public/images/photo05.jpg',
    },
    {
      id: 'ICAO03',
      urlImage: '/images/photo03.jpeg',
      title: 'Doesnt Matter',
      ramonas: '/public/images/photo06.jpg',
    },
    {
      id: 'ICAO04',
      urlImage: '/images/photo04.jpeg',
      title: 'Doesnt Matter',
      ramonas: '/public/images/photo06.jpg',
    },
    {
      id: 'ICAO05',
      urlImage: '/images/photo05.jpg',
      title: 'Doesnt Matter',
      ramonas: '/public/images/photo06.jpg',
    },
    {
      id: 'ICAO06',
      urlImage:
        'https://images.pexels.com/photos/9749273/pexels-photo-9749273.jpeg',
      title: 'Doesnt Matter',
      ramonas: '/public/images/photo06.jpg',
    },
    {
      id: 'ICAO07',
      urlImage: '/images/photo07.jpg',
      title: 'Doesnt Matter, dont worry about it',
      ramonas: '/public/images/photo06.jpg',
    },
  ]

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
        <section id="skills" className="container ">
          <Title
            text="websites"
            textEmphasis="The best"
            positionEmphasisBefore
          />
          <br />
          <br />
          <br />
          {isOpenModal && <Modal showModal={setIsOpenModal} />}

          <section className="colection">
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => setIsOpenModal(true)}
                aria-hidden="true"
              >
                <Card urlImage={project.urlImage} title={project.title} />
              </div>
            ))}
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
