// import styles from '../styles/Home.module.scss'
import styles from './Header.module.scss'

const Header = () => {
  return (<header id="header" className={styles.header}>
    <nav className={styles.nav}>
      <div className={styles['nav-mobile']}>
        <div className={styles.logo}>
          <span className={styles.logo__typo}>César <strong>Aparicio </strong></span>
        </div>
        <div className={styles['menu-hamburger']}>
          <div id={styles['icon-hamburger']}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      <ul id="menu" className={styles.menu}>
        <li className={styles.menu__item}>
          <a href="#home" className={`${styles['menu__item-link']} ${styles['menu__item--active']}`}
          >Inicio</a>
        </li>
        <li className={styles.menu__item}>
          <a href="#resume" className={styles['menu__item-link']}>Experiencia</a>
        </li>
        <li className={styles.menu__item}>
          <a href="#skills" className={styles['menu__item-link']}>Skills</a>
        </li>
        <li className={styles.menu__item}>
          <a href="#works" className={styles['menu__item-link']}>Proyectos</a>
        </li>
      </ul>
    </nav>
  </header>);
}

export default Header;