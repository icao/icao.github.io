import TimelineMoment from '@components/Common/TimelineMoment/TimelineMoment'
import styles from './Experience.module.scss'

const Experience = () => (
  <div className={styles.experience}>
    <div className={styles.experience__timeline}>
      <div className={styles['experience__title-container']}>
        <h3 className={styles.experience__title}>Experiencia</h3>
      </div>
      <div className={styles.experience__section}>
        <div className={styles.experience__item}>
          <TimelineMoment arrowRight>
            <h4 className={styles.experience__role}>Product Engineer</h4>
            <p className={styles.experience__place}>Thirty3</p>
            <p className={styles.experience__description}>
              Desarrollo de aplicaciones web SSR(landing pages, administración
              de artículos, carrito de compra, manejo de sesión con JWT,
              creación de componentes a partir de un sistema de diseño) y
              documentación(Storybook).
            </p>
            <p className={styles.experience__description}>
              Integración de Front End con servicio Backend vía RESTful
              API&#39;s.
            </p>
            <p className={styles.experience__period}>Marzo 2021 - Mayo 2021</p>
          </TimelineMoment>
        </div>
        <div className={styles.experience__item}>
          <TimelineMoment arrowLeft>
            <h4 className={styles.experience__role}>
              Freelance Front End Developer y Open Source
            </h4>
            <p className={styles.experience__description}>
              Desarrollo de sitios web para pequeños negocios(landing pages,
              sitios web con múltiples páginas).
            </p>
            <p className={styles.experience__description}>
              Creación de temas para VSCode y Wox Launcher. Generador de temas
              para VSCode.
            </p>
            <p className={styles.experience__period}>
              Septiembre 2018 - Actualmente
            </p>
          </TimelineMoment>
        </div>
        <div className={styles.experience__item}>
          <TimelineMoment arrowRight>
            <h4 className={styles.experience__role}>Front End Developer</h4>
            <p className={styles.experience__place}>AMK Technologies </p>
            <p className={styles.experience__description}>
              Desarrollo de micrositios, landing pages y aplicaciones
              internas(Dashboards, administración de usuarios, mapas e
              informes). Integración de Front End con servicio Backend vía
              RESTful API&#39;s.
            </p>
            <p className={styles.experience__description}>
              Creación de material educativo sobre herramientas de
              prototipado(Zeplin, In Vision) para la mejora del workflow entre
              el área de Front End y Diseño. Capacitación de CSS al equipo de
              diseño.
            </p>
            <p className={styles.experience__period}>
              Octubre 2016 - Septiembre 2018
            </p>
          </TimelineMoment>
        </div>
        <div className={styles.experience__item}>
          <TimelineMoment arrowLeft>
            <h4 className={styles.experience__role}>Desarrollador HTML5</h4>
            <p className={styles.experience__place}>Grupo Salinas</p>
            <p className={styles.experience__description}>
              Desarrollo y soporte de interfaces internas y aplicaciones de
              visualización de datos.
            </p>
            <p className={styles.experience__description}>
              Monitoreo de aplicaciones de operaciones, soporte(mesa de ayuda) y
              elaboración de informes.
            </p>
            <p className={styles.experience__period}>
              Diciembre 2015 – Abril 2016
            </p>
          </TimelineMoment>
        </div>
        <div className={styles.experience__item}>
          <TimelineMoment arrowRight>
            <h4 className={styles.experience__role}>Webmaster / Developer</h4>
            <p className={styles.experience__place}> iDi Marketing </p>
            <p className={styles.experience__description}>
              Creación y diseño de sitios web para negocios locales en la Ciudad
              de México.
            </p>
            <p className={styles.experience__description}>
              Creación de sitios responsivos, principalmente para sitios
              WordPress.
            </p>
            <p className={styles.experience__period}>
              Diciembre 2012 – Diciembre 2014
            </p>
          </TimelineMoment>
        </div>
      </div>

      <div className={styles['experience__title-container']}>
        <h3 className={styles.experience__title}>Educación</h3>
      </div>
      <div className={styles.experience__section}>
        <div className={styles.experience__item}>
          <TimelineMoment arrowRight>
            <h4 className={styles.experience__role}>
              SCRUM - Clínica De Adopción De SCRUM{' '}
            </h4>
            <p className={styles.experience__place}>
              Lymon Consulting S.A. de C.V - Scrum Alliance
            </p>
            <p className={styles.experience__period}>Mayo 2017</p>
          </TimelineMoment>
        </div>
        <div className={styles.experience__item}>
          <TimelineMoment arrowLeft>
            <h4 className={styles.experience__role}>
              Introducción al Desarrollo Web
            </h4>
            <p className={styles.experience__place}>
              Universidad d&#39;Alacant , ACTIVATE by Google
            </p>
            <p className={styles.experience__description}>
              Curso de diseño web profesional.
            </p>
            <p className={styles.experience__period}>Mayo 2016</p>
          </TimelineMoment>
        </div>
        <div className={styles.experience__item}>
          <TimelineMoment arrowRight>
            <h4 className={styles.experience__role}>
              Ingeniería en computación
            </h4>
            <p className={styles.experience__place}>
              Universidad Autónoma Metropolitana - Azcapotzalco
            </p>
            <p className={styles.experience__period}>Mayo 2009 - Julio 2015</p>
          </TimelineMoment>
        </div>
      </div>
      <div className={styles['experience__title-container']}>
        <div className={styles.experience__dot} />
      </div>
    </div>
  </div>
)

export default Experience
