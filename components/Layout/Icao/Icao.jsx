import Image from 'next/image'
import Link from 'next/link'
import photoImage from '@public/images/photo_01.jpg'
import styles from './Icao.module.scss'

const Icao = () => (
  <div className={styles.icao}>
    <div className={styles['icao__profile-photo']}>
      <div className={styles.icao__photo}>
        <div className="next__image-container">
          <Image
            src={photoImage}
            placeholder="blur"
            layout="fill"
            alt="photo cesar aparicio"
            className="next__image--responsive"
          />
        </div>
      </div>
      <h2 className={styles.icao__name}>Ildefonso César Aparicio Orozco</h2>
      <h3 className={styles.icao__title}>Front End Developer</h3>
      <Link href="mailto:clark012389@hotmail.com" passHref>
        <a
          href="replace"
          title="Enviame un correo"
          className="button--call-to-action-icon"
        >
          ENVIAME UN MENSAJE
        </a>
      </Link>
    </div>

    <div className={styles.icao__about}>
      <p>
        Hola! Gracias por tomarte el tiempo de conocerme, es un placer para mi
        que estes aqui.
      </p>
      <p>
        Dejame presentarme, mi nombre es <strong>I</strong>ldefonso{' '}
        <strong>C</strong>ésar <strong>A</strong>paricio <strong>O</strong>
        rozco, soy Mexicano y resido actualmente en la ciudad de México.
      </p>
      <p>
        Soy Front End Developer y amante del diseño, tengo pasión por
        implementar UI modernas, sobre todo inovadoras. La curiosidad me alienta
        a estar en continuo aprendizaje y me llevó a encontrar un área en el
        desarrollo web, en la cual decidí empeñar mi talento.
      </p>
      <p>
        Me encanta lo que hago, me gusta involucrarme con personas de distintar
        áreas y asi formar un pensamiento interdiciplinario, lo cual va de la
        mano con la implementacion de software.
      </p>
      <p>
        Cuando no programo, me gusta tomar fotografias, aun soy un fotografo
        amateur, me llaman las calles y las personas, por eso me gusta el estilo
        de street photography.
      </p>
      <p>
        Me encanta escuchar musica para la ocasion, disfruto en hacerlo mientras
        trabajo.
      </p>
      <p>
        Y no dejo a un lado los videojuegos, confiezo que me gusta el universo
        de World of Warcraft y Halo.
      </p>

      <p>
        Si quieres conocer mas de mis detalles profesionales, considera seguir
        explorando este sitio, adelante.
      </p>
    </div>
  </div>
)

export default Icao
