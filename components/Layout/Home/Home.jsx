import Typewriter from '@components/Common/Typewriter/Typewriter'
import styles from './Home.module.scss'

const Home = () => (
  <section id="home" className={styles.home}>
    <div className={styles.home__background} />
    <h1 className={styles.home__title}>
      ¡Hola! Soy
      <strong>
        <span className={styles['color-enphasis']}>{` César Aparicio`}</span>
      </strong>
      , Front End Developer y amante del diseño web.
    </h1>

    <div className={styles['typed-container']}>
      <Typewriter
        options={{
          stringsElement: '#strings',
          typeSpeed: 50,
          startDelay: 100,
          backSpeed: 10,
          loop: true,
          backDelay: 1200,
          loopCount: false,
          showCursor: true,
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
  </section>
)

export default Home
