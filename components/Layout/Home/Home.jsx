import Typewriter from '@components/Common/Typewriter/Typewriter'
import Codepen from '@components/Icons/Codepen/Codepen'
import Github from '@components/Icons/Github/Github'
import Linkedin from '@components/Icons/Linkedin/Linkedin'
import Link from 'next/link'
import Image from 'next/image'
import backgroundImage from '@public/images/background.jpg'
import styles from './Home.module.scss'

const Home = () => (
  <section
    id="home"
    className={styles.home}
    style={{ backgroundImage: ` url('/images/background_05.webp')` }}
  >
    <div className={styles.home__background}>
      <Image
        src={backgroundImage}
        placeholder="blur"
        alt="image cesar aparicio"
        layout="fill"
        objectFit="cover"
      />
    </div>
    <h1 className={styles.home__title}>
      <span className={styles['font-weight-600']}>
        ¡Hola! Soy
        <span className={styles['color-enphasis']}>{` César Aparicio`}</span>
      </span>
      , <br />
      Front End Developer y amante del diseño web.
    </h1>

    <div className={styles['typed-container']}>
      <Typewriter
        options={{
          stringsElement: '#strings',
          typeSpeed: 60,
          startDelay: 100,
          backSpeed: 20,
          loop: true,
          backDelay: 2200,
          loopCount: false,
          showCursor: true,
          cursorChar: '_',
        }}
      >
        <div id="strings">
          <p>
            Soy de la
            <span
              className={styles['color-enphasis']}
            >{` Ciudad de México`}</span>
          </p>
          <p>
            Tengo experiencia
            <span className={styles['color-enphasis']}>
              {` creando interfaces`}
            </span>
          </p>
          <p>
            Desarrollo
            <span
              className={styles['color-enphasis']}
            >{` aplicaciones web`}</span>
          </p>
          <p>
            <span className={styles['color-enphasis']}>{`Amo `}</span>el diseño
          </p>
          <p>
            Me gusta implementar
            <span className={styles['color-enphasis']}>
              {` diseños inovadores`}
            </span>
          </p>
        </div>
      </Typewriter>
    </div>

    <div className={styles['social-network__container']}>
      <div className={styles['social-network__icon']}>
        <Link href="https://codepen.io/icao" passHref>
          <a href="replace" target="_blank" rel="noopener noreferrer">
            <Codepen color="#e7eeff" hoverColor="#ff3366" />
          </a>
        </Link>
      </div>
      <div className={styles['social-network__icon']}>
        <Link href="https://github.com/icao" passHref>
          <a href="replace" target="_blank" rel="noopener noreferrer">
            <Github color="#e7eeff" hoverColor="#ff3366" />
          </a>
        </Link>
      </div>
      <div className={styles['social-network__icon']}>
        <Link href="https://www.linkedin.com/in/cesaricao/" passHref>
          <a href="replace" target="_blank" rel="noopener noreferrer">
            <Linkedin color="#e7eeff" hoverColor="#ff3366" />
          </a>
        </Link>
      </div>
    </div>
  </section>
)

export default Home
