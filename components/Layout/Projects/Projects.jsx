import { useState } from 'react'
import Image from 'next/image'
import Card from '@components/Common/Card/Card'
import Modal from '@components/Common/Modal/Modal'
import Link from 'next/link'
import projects from '@assets/projects'
import styles from './Projects.module.scss'

function Projects() {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [modalContent, setModalContent] = useState(null)

  const generateModal = (urlImage, title, paragraphs, technologies, link) => {
    setModalContent(
      <div className={styles.detail__container}>
        <div className={('next__image-container', styles.detail__image)}>
          <Image src={urlImage} layout="fill" className="next__image--cover" />
        </div>
        <div className={styles.detail__content}>
          <h2 className={styles.detail__title}>{title}</h2>
          {paragraphs.map((paragraph, index) => (
            <p key={`${index + 1}`} className={styles.detail__text}>
              {paragraph}
            </p>
          ))}

          <p className={styles.detail__text}>Tecnologias usadas:</p>
          <ul className="ul__emphasis">
            {technologies.map((technology, index) => (
              <li key={`${index + 1}`} className={styles.detail__list}>
                {technology}
              </li>
            ))}
          </ul>
          <div className={styles.detail__footer}>
            <Link href={link} passHref>
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
  }

  return (
    <>
      {isOpenModal && <Modal showModal={setIsOpenModal}>{modalContent}</Modal>}
      <section className="collection">
        {projects.map(
          ({
            id,
            urlImage,
            title,
            type,
            descriptions: { paragraphs, technologies },
            link,
          }) => (
            <div
              key={id}
              onClick={() => {
                setIsOpenModal(true)
                generateModal(urlImage, title, paragraphs, technologies, link)
              }}
              aria-hidden="true"
            >
              <Card
                urlImage={urlImage}
                title={title}
                tag={type}
                designAlternative
              />
            </div>
          )
        )}
      </section>
    </>
  )
}

export default Projects
