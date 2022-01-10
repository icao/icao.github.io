import Link from 'next/link'
import Image from 'next/image'
import Codepen from '@components/Icons/Codepen/Codepen'
import Linkedin from '@components/Icons/Linkedin/Linkedin'
import Github from '@components/Icons/Github/Github'
import logoFooter from '@public/images/logo_footer.png'
import styles from './Footer.module.scss'

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles['footer__filtro-background']}>
      <div className="container">
        <div className={styles.footer__content}>
          <div className={styles['footer__image-container']}>
            <Image
              src={logoFooter}
              // layout="fill"
              // width="250"
              // height="100"
              // className={styles.img}
              // objectFit="cover"
            />
          </div>
          <h2 className={styles.footer__title}>Front End Developer</h2>
          <div className={styles['footer__social-network']}>
            <div className={styles['footer__social-network-icon']}>
              <Link href="https://codepen.io/icao" passHref>
                <a href="replace" target="_blank" rel="noopener noreferrer">
                  <Codepen color="#e7eeff" hoverColor="#dd013f" />
                </a>
              </Link>
            </div>
            <div className={styles['footer__social-network-icon']}>
              <Link href="https://github.com/icao" passHref>
                <a href="replace" target="_blank" rel="noopener noreferrer">
                  <Github color="#e7eeff" hoverColor="#dd013f" />
                </a>
              </Link>
            </div>
            <div className={styles['footer__social-network-icon']}>
              <Link href="https://www.linkedin.com/in/cesaricao/" passHref>
                <a href="replace" target="_blank" rel="noopener noreferrer">
                  <Linkedin color="#e7eeff" hoverColor="#dd013f" />
                </a>
              </Link>
            </div>
          </div>
          <p className={styles.footer__copyright}>
            icao © Copyright 2022. Todos los derechos reservados.
            <br />
            <br />
            Diseño & Desarrollo hecho con <small>🤍</small> por <b>icao</b>.
          </p>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
