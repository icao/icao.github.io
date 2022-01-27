import clsx from 'clsx'
import styles from './Skills.module.scss'

const Skills = () => (
  <div className={styles.skills}>
    <h3 className={styles.skills__title}>Mi especialización</h3>
    <ul className={clsx('ul__emphasis', styles.skills__sections)}>
      <li className={styles.skills__subtitle}>
        Front End Development
        <ul className={clsx(styles.skills__text, 'ul__emphasis--none')}>
          <li>HTML 5</li>
          <li>CSS3 (Grid Layout, Flexbox, Responsive Design, SVG Animation)</li>
          <li>Preprocessors CSS (SASS, SCSS)</li>
          <li>Arquitectura CSS (BEM, CSS Modules)</li>
          <li>CSS Frameworks (Tailwind, Bulma, Bootstrap)</li>
          <li>JavaScript (ES6, Promises, Async/Await, Object patterns)</li>
          <li>
            Librerias JS/Frameworks JS: Vue2, React (Hooks, Context, Class based
            components, UI State)
          </li>
          <li>Unit Testing - React (Jest, Enzyme)</li>
          <li>MetaFramework SSR (Nuxt, Next)</li>
          <li>Task Runners (Grunt, Gulp)</li>
          <li>Module Bundlers (Webpack, Parcel)</li>
          <li>Git</li>
        </ul>
      </li>
      <li className={styles.skills__subtitle}>
        Web Design
        <ul className={clsx(styles.skills__text, 'ul__emphasis--none')}>
          <li>Prototipado (Figma, Adobe XD)</li>
          <li>Edición (CC Adobe Ilustrator, CC Adobe Photoshop)</li>
        </ul>
      </li>
      <li className={styles.skills__subtitle}>
        Agile Frameworks
        <ul className={clsx(styles.skills__text, 'ul__emphasis--none')}>
          <li>Metodología SCRUM</li>
        </ul>
      </li>
    </ul>

    <h3 className={styles.skills__title}>Idiomas</h3>
    <ul
      className={clsx(
        styles.skills__text,
        'ul__emphasis--none',
        styles.skills__sections
      )}
    >
      <li>Español</li>
      <li>Ingles (Nivel A2) y mejorando</li>
    </ul>

    <h3 className={styles.skills__title}>Intereses</h3>
    <ul
      className={clsx(
        'ul__emphasis',
        styles.skills__sections,
        styles.skills__interests
      )}
    >
      <li className={styles.skills__subtitle}>
        Profesionales
        <ul className={clsx(styles.skills__text, 'ul__emphasis--none')}>
          <li>Visualizacion de datos</li>
          <li>Experiencia de usuario con accesibilidad</li>
          <li>Blockchain</li>
          <li>Internet of things</li>
          <li>Inteligencia Artificial</li>
        </ul>
      </li>
      <li className={styles.skills__subtitle}>
        Personales
        <ul className={clsx(styles.skills__text, 'ul__emphasis--none')}>
          <li>Fotografía (Street Photography)</li>
          <li>Viajar</li>
          <li>Música</li>
          <li>Caminatas para descubir cosas nuevas</li>
          <li>Videojuegos</li>
        </ul>
      </li>
    </ul>
  </div>
)

export default Skills
