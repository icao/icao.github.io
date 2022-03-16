import Link from 'next/link'
import Image from 'next/image'
import Codepen from '@components/Icons/Codepen/Codepen'
import Linkedin from '@components/Icons/Linkedin/Linkedin'
import Github from '@components/Icons/Github/Github'
import logoFooter from '@public/images/logo_footer.png'
import Heart from '@components/Icons/Heart/Heart'
import styles from './Footer.module.scss'

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles['footer__filtro-background']}>
      <div className="container">
        <div className={styles.footer__content}>
          <div className={styles['footer__image-container']}>
            <Image
              src={logoFooter}
              alt="Logo ICAO"
              // layout="fill"
              // width="250"
              // height="100"
              className="next__image--responsive"
              placeholder="blur"
            />
          </div>
          <h3 className={styles.footer__title}>Front End Developer</h3>
          <div className={styles['footer__social-network']}>
            <div className={styles['footer__social-network-icon']}>
              <Link href="https://codepen.io/icao" passHref>
                <a href="replace" target="_blank" rel="noopener noreferrer">
                  <Codepen color="#e7eeff" hoverColor="#ff3366" />
                </a>
              </Link>
            </div>
            <div className={styles['footer__social-network-icon']}>
              <Link href="https://github.com/icao" passHref>
                <a href="replace" target="_blank" rel="noopener noreferrer">
                  <Github color="#e7eeff" hoverColor="#ff3366" />
                </a>
              </Link>
            </div>
            <div className={styles['footer__social-network-icon']}>
              <Link href="https://www.linkedin.com/in/cesaricao/" passHref>
                <a href="replace" target="_blank" rel="noopener noreferrer">
                  <Linkedin color="#e7eeff" hoverColor="#ff3366" />
                </a>
              </Link>
            </div>
          </div>
          <p className={styles.footer__copyright}>
            Diseño & Desarrollo hecho con
            <span className={styles['footer__heart-icon']}>
              <Heart color="#ff3366" hoverColor="#ff3366" />
            </span>
            por <b>icao</b> en CDMX, México.
            <br />
            <br />
            icao © Copyright 2022.
          </p>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
