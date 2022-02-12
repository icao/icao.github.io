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
            <h3 className={styles.experience__role}>Product Engineer Junior</h3>
            <p className={styles.experience__place}>Thirty3</p>
            <p className={styles.experience__period}>Marzo 2021 - mayo 2021</p>
            <p className={styles.experience__description}>
              Desarrollo de aplicaciones web SSR(administracion de articulos,
              carrito de compra, manejo de sesión con JWT, creación de
              componentes aparir de un sistema de diseño) y
              documentación(Storybook).
            </p>
            <p className={styles.experience__description}>
              Integración de Front End con servicio Backend via RESTful
              API&#39;s con JWT.
            </p>
          </TimelineMoment>
        </div>
        <div className={styles.experience__item}>
          <TimelineMoment arrowLeft>
            <h3 className={styles.experience__role}>
              Freelance Front End Developer y Open Source
            </h3>
            <p className={styles.experience__period}>September 2018 - 2021</p>
            <p className={styles.experience__description}>
              Desarrollo de sitios web para negocios pequeños.
            </p>
            <p className={styles.experience__description}>
              Creación de temas para VSCODE y Wox, desarrollo de software para
              generació de los mismos como una mejora.
            </p>
          </TimelineMoment>
        </div>
        <div className={styles.experience__item}>
          <TimelineMoment arrowRight>
            <h3 className={styles.experience__role}>Front End Developer</h3>
            <p className={styles.experience__place}>AMK Technologies </p>
            <p className={styles.experience__period}>
              October 2016 - September 2018
            </p>
            <p className={styles.experience__description}>
              Desarrollo de micrositios y aplicaciones internas (Dashboards,
              administración de usuarios, mapas e informes). Inegración de Front
              End con servicio Backend via RESTful API&#39;s.
            </p>
            <p className={styles.experience__description}>
              Creación de material educativo para el equipo de diseño sobre
              herramientas para la mejora del workflow entre el área de Front
              End y Diseño, adicionalmente una capacitacion de CSS.
            </p>
          </TimelineMoment>
        </div>
        <div className={styles.experience__item}>
          <TimelineMoment arrowLeft>
            <h3 className={styles.experience__role}>Desarrollador HTML5</h3>
            <p className={styles.experience__place}>Grupo Salinas</p>
            <p className={styles.experience__period}>
              December 2015 – April 2016
            </p>
            <p className={styles.experience__description}>
              Desarrollo y soporte de interfaces internas y aplicaciones de
              visualización de datos.
            </p>
            <p className={styles.experience__description}>
              Monitoreo de aplicaciones de operaciones, soporte(mesa de ayuda) y
              elaboracion de informes.
            </p>
          </TimelineMoment>
        </div>
        <div className={styles.experience__item}>
          <TimelineMoment arrowRight>
            <h3 className={styles.experience__role}>Webmaster / Developer</h3>
            <p className={styles.experience__place}> iDi Marketing </p>
            <p className={styles.experience__period}>
              December 2012 – December 2014
            </p>
            <p className={styles.experience__description}>
              Creacion y diseño de sitios web para negocios locales en la Ciudad
              de México.
            </p>
            <p className={styles.experience__description}>
              Creación de sitios responsivos, principalmente para sitios
              WordPress.
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
            <h3 className={styles.experience__role}>
              SCRUM - Clínica De Adopción De SCRUM{' '}
            </h3>
            <p className={styles.experience__place}>
              Lymon Consulting S.A. de C.V - Scrum Alliance
            </p>
            <p className={styles.experience__period}>Mayo 2017</p>
          </TimelineMoment>
        </div>
        <div className={styles.experience__item}>
          <TimelineMoment arrowLeft>
            <h3 className={styles.experience__role}>
              Introducción al Desarrollo Web
            </h3>
            <p className={styles.experience__place}>
              Universidad d&#39;Alacant , ACTIVATE by Google
            </p>
            <p className={styles.experience__period}>Mayo 2016</p>
            <p className={styles.experience__description}>
              Curso de diseño profecional web.
            </p>
          </TimelineMoment>
        </div>
        <div className={styles.experience__item}>
          <TimelineMoment arrowRight>
            <h3 className={styles.experience__role}>
              Ingeniería en computación
            </h3>
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
