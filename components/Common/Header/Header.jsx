import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import useWindowResize from '@hooks/useWindowResize'
import useKeyPress from '@hooks/useKeyPress'
import styles from './Header.module.scss'

const menuItems = [
  { id: 1, tag: 'home', name: 'home' },
  { id: 2, tag: 'about', name: 'about' },
  { id: 3, tag: 'skills', name: 'skills' },
  { id: 4, tag: 'resume', name: 'resume' },
  { id: 5, tag: 'projects', name: 'projects' },
]

const Header = ({ transparent }) => {
  const [width] = useWindowResize()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMenuFixed, setIsMenuFixed] = useState(false)
  const { isKeyPressed } = useKeyPress('Escape')

  const [itemActive, setItemActive] = useState({
    id: 1,
    tag: 'home',
    name: 'inicio',
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

  function handleScroll() {
    const windowHeight =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop
    if (windowHeight > 180) setIsMenuFixed(true)
    else setIsMenuFixed(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function handleClickIconHamburger(event) {
    event.preventDefault()
    setIsMenuOpen(!isMenuOpen)
  }

  function handleItemClick(index) {
    setItemActive(menuItems[index])
    setIsMenuOpen(false)
  }

  // FIXME:
  // TODO: Validar porque projects no se selecciona bien ne el menu y se regresa a resume

  const options = {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.5,
  }

  useEffect(() => {
    menuItems.forEach((item) => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(({ isIntersecting }) => {
          if (isIntersecting) {
            setItemActive(item)
          }
        })
      }, options)
      observer.observe(document.querySelector(`#${item.tag}`))
      return () => {
        observer.disconnect()
      }
    })
  }, [menuItems])

  return (
    <header
      id="header"
      className={clsx(styles.header, {
        [styles['header--open']]: isMenuOpen,
        [styles['header--fixed']]: isMenuFixed,
        [styles['header--transparent']]: transparent,
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
          {menuItems.map((item, index) => (
            <li className={styles.menu__item} key={item.id}>
              <a
                href={`#${item.tag}`}
                className={clsx(styles['menu__item-link'], {
                  [styles['menu__item--active']]: itemActive.id === item.id,
                })}
                onClick={() => handleItemClick(index)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

Header.propTypes = {
  transparent: PropTypes.bool,
}

Header.defaultProps = {
  transparent: false,
}

export default Header
