import Head from 'next/head'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>César aparicio - icao - Front End Developer</title>
        <meta name="description" content="I am a Front End Developer and Design Lover" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <h1>Poner bien los estilos, tdo en sass , la base, el noormalize</h1>
      <h2>Organizar el coomponentes el header</h2>
      <h2>verificar si meter el scss junt al componente  en la carpeta styles y compnentes</h2>

      <header id="header" class="header">
        <nav>
          <div class="nav-mobile">
            <div class="logo">
              <span class="logo__typo">César <strong>Aparicio </strong></span>
            </div>
            <div class="menu-hamburger">
              <div id="icon-hamburger">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>

          <ul id="menu" class="menu">
            <li class="menu__item">
              <a href="#home" class="menu__item-link menu__item--active"
              >Inicio</a
              >
            </li>
            <li class="menu__item">
              <a href="#resume" class="menu__item-link">Experiencia</a>
            </li>
            <li class="menu__item">
              <a href="#skills" class="menu__item-link">Skills</a>
            </li>
            <li class="menu__item">
              <a href="#works" class="menu__item-link">Proyectos</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className={styles.main}>
        <p className={styles.title}>
          Refactor web <a href="https://icao.github.io/">icao</a>
        </p>

      </main>


    </div>
  )
}
