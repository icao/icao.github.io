import styles from './Experience.module.scss'

const Experience = () => (
  <div className={styles.experience}>
    <div className={styles.experience__timeline}>
      <div className={styles['experience__title-container']}>
        <h3 className={styles.experience__title}>Experiencia</h3>
      </div>
      <div className={styles.experience__section}>
        <div className={styles.experience__item}>
          <h3>Junior Product Engineer Junior</h3>
          <p>Thirty3</p>
          <p>Marzo 2021 - mayo 2021</p>
          <p>
            Desarrollo de aplicaciones web SSR(administracion de articulos,
            carrito de compra, manejo de sesión con JWT, creación de componentes
            aparir de un sistema de diseño) y documentación(Storybook).
            Integración de Front End con servicio Backend via RESTful API&#39;s
            con JWT.
          </p>
          <div className={styles['up-arrow']}>
            <p>Button with Up Arrow</p>
          </div>
          <div className={styles['left-arrow']}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
              sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              debitis, sit suscipit amet sed tempora beatae molestias eaque
              incidunt fuga.
            </p>
          </div>
        </div>
        <div className={(styles.experience__item, styles['left-arrow'])}>
          <h3>Freelance Front End Developer y Open Source</h3>
          <p>September 2018 - 2021</p>
          <p>Desarrollo de sitios web para negocios pequeños.</p>
          <p>
            Creación de temas para VSCODE y Wox, desarrollo de software para
            generació de los mismos como una mejora.
          </p>
        </div>
        <div className={styles.experience__item}>
          <h3>Front End Developer</h3>
          <p>AMK Technologies </p>
          <p>October 2016 - September 2018</p>
          <p>
            Desarrollo de micrositios y aplicaciones internas (Dashboards,
            administración de usuarios, mapas e informes). Inegración de Front
            End con servicio Backend via RESTful API&#39;s. Creación de material
            educativo para el equipo de diseño sobre herramientas para la mejora
            del workflow entre el área de Front End y Diseño, adicionalmente una
            capacitacion de CSS.
          </p>
        </div>
        <div className={styles.experience__item}>
          <h3>Desarrollador HTML5</h3>
          <p>Grupo Salinas</p>
          <p>December 2015 – April 2016</p>
          <p>
            Desarrollo y soporte de interfaces internas y aplicaciones de
            visualización de datos. Monitoreo de aplicaciones de operaciones y
            elaboracion de informes.
          </p>
        </div>
        <div className={styles.experience__item}>
          <h3>Webmaster / Developer</h3>
          <p> iDi Marketing </p>
          <p>December 2012 – December 2014</p>
          <p>
            Creacion y diseño de sitios web para negocios locales en la Ciudad
            de México. Creación de sitios responsivos, principalmente para
            sitios WordPress.
          </p>
        </div>
      </div>

      <div className={styles['experience__title-container']}>
        <h3 className={styles.experience__title}>Educación</h3>
      </div>
      <div className={styles.experience__section}>
        <div className={styles.experience__item}>
          <h3>INGENIERÍA EN COMPUTACIÓN</h3>
          <p>Universidad Autónoma Metropolitana - Azcapotzalco</p>
          <p>Mayo 2009 - Julio 2015</p>
        </div>
        <div className={styles.experience__item}>
          <h3>Introducción al Desarrollo Web</h3>
          <p>Universidad d&#39;Alacant , ACTIVATE by Google</p>
          <p>Mayo 2016</p>
          <p>Curso de diseño profecional web.</p>
        </div>
        <div className={styles.experience__item}>
          <h3>SCRUM - Clínica De Adopción De SCRUM </h3>
          <p>Lymon Consulting S.A. de C.V - Scrum Alliance</p>
          <p>Mayo 2017</p>
        </div>
      </div>
      <div className={styles['experience__title-container']}>
        <div className={styles.experience__dot} />
      </div>
    </div>
  </div>
)

export default Experience
