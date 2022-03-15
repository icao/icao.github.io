import Link from 'next/link'
import styles from './CvBanner.module.scss'

const CvBanner = () => (
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
          <Link href="mailto:clark012389@hotmail.com" passHref>
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
)

export default CvBanner
