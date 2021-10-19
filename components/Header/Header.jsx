import { useState } from 'react'
import clsx from 'clsx'
import styles from './Header.module.scss'

const Header = () => {

  let [isOpen, setIsOpen] = useState(true)

  return (
    <header id="header" className={clsx(styles.header, { [styles['header--open']]: isOpen })}>
      <nav className={styles.nav}>
        <div className={styles['nav-mobile']}>
          <div className={styles.logo}>
            <span className={styles.logo__typo}>César <strong>Aparicio </strong></span>
          </div>
          <div className={styles['menu-hamburger']}>
            <div id={styles['icon-hamburger']} className={clsx({ [styles['icon-hamburger--open']]: isOpen })}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        <ul id="menu" className={clsx(styles.menu, { [styles['menu--open']]: isOpen })}>
          <li className={styles.menu__item}>
            <a href="#home" className={clsx(styles['menu__item-link'], styles['menu__item--active'])}
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
    </header >);
}

export default Header;