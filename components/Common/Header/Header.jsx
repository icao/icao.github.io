import { useState, useEffect } from 'react'
import clsx from 'clsx'
import useWindowResize from '@hooks/useWindowResize'
import { useScrollPositionY } from '@hooks/useScrollPosition'
import useKeyPress from '@hooks/useKeyPress'
import styles from './Header.module.scss'

const Header = () => {
  const [width] = useWindowResize()
  const scrollY = useScrollPositionY()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMenuFixed, setIsMenuFixed] = useState(false)
  const { isKeyPressed } = useKeyPress('Escape')

  const [options, setOptions] = useState({
    linkActive: { id: 1, tag: 'home', name: 'inicio' },
    links: [
      { id: 1, tag: 'home', name: 'inicio' },
      { id: 2, tag: 'about', name: 'icao' },
      { id: 3, tag: 'skills', name: 'skills' },
      { id: 4, tag: 'projects', name: 'proyectos' },
      { id: 5, tag: 'resume', name: 'experiencia' },
    ],
  })

  useEffect(() => {
    if (width >= 992) {
      setIsMenuOpen(false)
    }
  }, [width])

  useEffect(() => {
    if (isKeyPressed) {
      setIsMenuOpen(false)
    }
  })

  useEffect(() => {
    if (scrollY > 100) setIsMenuFixed(true)
    if (scrollY <= 100) setIsMenuFixed(false)
  }, [scrollY])

  function handleClickIconHamburger(event) {
    event.preventDefault()
    setIsMenuOpen(!isMenuOpen)
  }

  function handleLinkClick(index) {
    setOptions({ ...options, linkActive: options.links[index] })
    setIsMenuOpen(false)
  }

  return (
    <header
      id="header"
      className={clsx(styles.header, {
        [styles['header--open']]: isMenuOpen,
        [styles['header--fixed']]: isMenuFixed,
      })}
    >
      <nav className={styles.nav}>
        <div className={styles['nav-mobile']}>
          {/* Logo */}
          <div className={styles.logo}>
            <span className={styles.logo__typo}>
              César
              <strong> Aparicio</strong>
            </span>
          </div>
          {/* Icon Hamburguer */}
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
                className={clsx(styles['menu__item-link'], {
                  [styles['menu__item--active']]:
                    options.linkActive.id === link.id,
                })}
                onClick={() => handleLinkClick(index)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
