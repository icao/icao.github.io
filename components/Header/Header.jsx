import { useState, useEffect } from 'react'
import clsx from 'clsx'
import styles from './Header.module.scss'
import useWindowResize from '../../hooks/useWindowResize'

const Header = () => {
  const [width] = useWindowResize()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const [options, setOptions] = useState({
    linkActive: { id: 1, tag: 'home', name: 'inicio' },
    links: [
      { id: 1, tag: 'home', name: 'inicio' },
      { id: 2, tag: 'resume', name: 'experiencia' },
      { id: 3, tag: 'skills', name: 'skills' },
      { id: 4, tag: 'projects', name: 'proyectos' },
    ],
  })

  useEffect(() => {
    if (width >= 992) {
      setIsMenuOpen(false)
    }
  })

  function handleClickIconHamburger(event) {
    event.preventDefault()

    setIsMenuOpen(!isMenuOpen)
  }

  function handleLinkClick(index) {
    setOptions({ ...options, linkActive: options.links[index] })
  }

  return (
    <header
      id="header"
      className={clsx(styles.header, {
        [styles['header--open']]: isMenuOpen,
      })}
    >
      <nav className={styles.nav}>
        <div className={styles['nav-mobile']}>
          <div className={styles.logo}>
            <span className={styles.logo__typo}>
              César
              <strong>Aparicio </strong>
            </span>
          </div>
          <div className={styles['menu-hamburger']}>
            <button
              id={styles['icon-hamburger']}
              className={clsx({
                [styles['icon-hamburger--open']]: isMenuOpen,
              })}
              onClick={handleClickIconHamburger}
              type="button"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        <ul
          id="menu"
          className={clsx(styles.menu, {
            [styles['menu--open']]: isMenuOpen,
          })}
        >
          {options.links.map((link, index) => (
            <li className={styles.menu__item} key={link.id}>
              <a
                href={`#${link.tag}`}
                className={clsx(
                  styles['menu__item-link'],
                  options.linkActive.id === link.id
                    ? styles['menu__item--active']
                    : ''
                )}
                onClick={() => handleLinkClick(index)}
              >
                {link.name}
              </a>
            </li>
          ))}

          {/* <li className={styles.menu__item}>
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
          </li> */}
        </ul>
      </nav>
    </header>
  )
}

export default Header
