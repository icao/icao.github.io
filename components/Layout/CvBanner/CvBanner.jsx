import Link from 'next/link'
import BackgroundLayout from '@components/Layout/BackgroundLayout/BackgroundLayout'
import styles from './CvBanner.module.scss'

const CvBanner = () => (
  <BackgroundLayout
    src="/images/bg_cv_banner.webp"
    placeholderBlur="/images/bg_cv_banner_placeholder.webp"
    backgroundPosition="top"
  >
    <div className={styles.banner}>
      <div className={styles.banner__filter}>
        <div className="container">
          <h3 className={styles.banner__title}>Contacto</h3>
          <p className={styles.banner__paragraph}>
            Si estas interesado en mí, puedes descargar mi CV y contactarme o
            enviarme un mensaje.
          </p>
          <br />
          <div className={styles.banner__buttons}>
            {/* TODO: AGREGAR CV DEFINITIVO */}
            {/* TODO: sacar fotografia del perfil de la seccion de ICAO */}
            <Link href="/docs/cv.pdf" download="CV_Cesar_Aparicio" passHref>
              <a
                href="replace"
                title="Enviame un correo"
                target="_blank"
                rel="noopener noreferrer"
                className="button--call-to-action button--call-to-action--focus"
                download="CV_Cesar_Aparicio"
              >
                DESCARGAR CV
              </a>
            </Link>
            <Link href="mailto:cesar.aparicio.icao@outlook.com" passHref>
              <a
                href="replace"
                title="Enviame un correo"
                className="button--call-to-action"
              >
                ENVIAME UN MENSAJE
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </BackgroundLayout>
)

export default CvBanner
