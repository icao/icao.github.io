import { useState } from 'react'
import Image from 'next/image'
import Card from '@components/Common/Card/Card'
import Modal from '@components/Common/Modal/Modal'
import Link from 'next/link'
import styles from './Projects.module.scss'

function Projects() {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [modalContent, setModalContent] = useState(null)
  const projects = [
    {
      id: 'ICAO01',
      urlImage: '/images/photo01.jpeg',
      title: 'The player winner',
      ramonas: '/public/images/photo04.jpg',
      type: 'Open Source',
    },
    {
      id: 'ICAO02',
      urlImage: '/images/photo02.jpeg',
      title: 'VSCODE Extension',
      ramonas: '/public/images/photo05.jpg',
      type: 'Open Source',
    },
    {
      id: 'ICAO03',
      urlImage: '/images/photo03.jpeg',
      title: 'CODEPEN',
      ramonas: '/public/images/photo06.jpg',
      type: 'Landing Page',
    },
    {
      id: 'ICAO04',
      urlImage: '/images/photo04.jpeg',
      title: 'VSCODE Theme',
      ramonas: '/public/images/photo06.jpg',
      type: 'Photography',
    },
    {
      id: 'ICAO05',
      urlImage: '/images/photo05.jpg',
      title: 'The World Times',
      ramonas: '/public/images/photo06.jpg',
      type: 'Open Source',
    },
    {
      id: 'ICAO06',
      urlImage:
        'https://images.pexels.com/photos/9749273/pexels-photo-9749273.jpeg',
      title: 'Map Finder Routes',
      ramonas: '/public/images/photo06.jpg',
      type: 'Progressive Web App',
    },
    {
      id: 'ICAO07',
      urlImage: '/images/photo07.jpg',
      title: 'Doesnt Matter, dont worry about it',
      ramonas: '/public/images/photo06.jpg',
      type: 'Open Source',
    },
  ]

  return (
    <>
      {isOpenModal && <Modal showModal={setIsOpenModal}>{modalContent}</Modal>}

      <section className="collection">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => {
              setIsOpenModal(true)
              setModalContent(
                <div className={styles.detail__container}>
                  <div
                    className={('next__image-container', styles.detail__image)}
                  >
                    <Image
                      // src="/images/photo02.jpeg"
                      src="https://images.pexels.com/photos/9749273/pexels-photo-9749273.jpeg"
                      layout="fill"
                      className="next__image--cover"
                    />
                  </div>
                  <div className={styles.detail__content}>
                    <h2 className={styles.detail__title}>{project.title}</h2>
                    <p className={styles.detail__text}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Assumenda officiis iure deserunt expedita pariatur ullam
                      sed id, voluptatum, quis eligendi obcaecati, at porro
                      voluptate aspernatur.
                    </p>
                    <p className={styles.detail__text}>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Illum, fugiat quam! Eos voluptates enim vero?
                    </p>
                    <p className={styles.detail__text}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Recusandae odit fuga iusto.
                    </p>

                    <p className={styles.detail__text}>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Et dignissimos sapiente laudantium, fugiat rem debitis sit
                      corporis voluptates, odit nihil sed itaque laboriosam,
                      reiciendis cum?
                    </p>

                    <p className={styles.detail__text}>Lorem ipsum:</p>

                    <ul className="ul__emphasis">
                      <li className={styles.detail__list}>Lorem, ipsum.</li>
                      <li className={styles.detail__list}>
                        Opera rotas, tenet ipsum dolor sit romen fergen tom
                        amet.
                      </li>
                      <li className={styles.detail__list}>Lorem dolor.</li>
                      <li className={styles.detail__list}>Iplor sit amet.</li>
                      <li className={styles.detail__list}>
                        Adipisci consequuntur nostrum{' '}
                      </li>
                    </ul>
                    <div className={styles.detail__footer}>
                      <Link
                        href="https://www.linkedin.com/in/cesaricao/"
                        passHref
                      >
                        <a
                          href="replace"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="button--call-to-action"
                        >
                          VER PROYECTO
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              )
            }}
            aria-hidden="true"
          >
            <Card
              urlImage={project.urlImage}
              title={project.title}
              tag={project.type}
              designAlternative
            />
          </div>
        ))}
      </section>
    </>
  )
}

export default Projects
