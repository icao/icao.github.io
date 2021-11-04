import styles from './Home.module.scss'

const Home = () => (
  <section id="home" className={styles.vieport__full}>
    <div className={styles.home__background} />
    <h1 className={styles.home__title}>
      ¡Hola! Soy
      <strong>
        <span className={styles['color-enphasis']}>César Aparicio</span>
      </strong>
      , Front End Developer y amante del diseño web.
    </h1>
    <div className={styles['typed-container']}>
      <h2 className={styles.typed__title}>
        <span id="typed" />
      </h2>
      <div id="typed-strings">
        <p>
          Soy de la{' '}
          <span className={styles['color-enphasis']}>Ciudad de México</span>
        </p>
        <p>
          Tengo experiencia
          <span className={styles['color-enphasis']}>creando interfaces</span>
        </p>
        <p>
          Desarrollo{' '}
          <span className={styles['color-enphasis']}>aplicaciones web</span>
        </p>
        <p>
          <span className={styles['color-enphasis']}>Amo</span> el diseño
        </p>
        <p>
          Me gusta implementar
          <span className={styles['color-enphasis']}>diseños inovadores</span>
        </p>
      </div>
    </div>
  </section>
)

export default Home
