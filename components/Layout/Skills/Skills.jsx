import Comment from '@components/Icons/Comment/Comment'
import clsx from 'clsx'
import UserCard from '@components/Icons/UserCard/UserCard'
import BrainCircuit from '@components/Icons/BraincCircuit/BrainCircuit'
import styles from './Skills.module.scss'

const Skills = () => (
  <div className={styles.skills}>
    <h3 className={styles.skills__title}>
      <span className={styles.skills__icon}>
        <BrainCircuit color="#ff3366" />
      </span>
      Mi especialización
    </h3>
    <ul className={clsx('ul__emphasis', styles.skills__sections)}>
      <li className={styles.skills__subtitle}>
        Front End Development
        <ul className={clsx(styles.skills__text, 'ul__emphasis--none')}>
          <li>HTML 5 (Semántica y Accesibilidad)</li>
          <li>CSS3 (Grid Layout, Flexbox, Diseño responsivo, animación SVG)</li>
          <li>Preprocesadores CSS (SASS, SCSS)</li>
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
          <li>Git (Workflows y Pull Request)</li>
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

    <h3 className={styles.skills__title}>
      <span className={styles.skills__icon}>
        <Comment color="#ff3366" />
      </span>
      Idiomas
    </h3>
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

    <h3 className={styles.skills__title}>
      {' '}
      <span className={styles.skills__icon}>
        <UserCard color="#ff3366" />
      </span>
      Intereses
    </h3>
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
          <li>Visualización de datos</li>
          <li>Experiencia de usuario con accesibilidad</li>
          <li>Web scraping</li>
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
          <li>Museos</li>
          <li>Caminatas para descubrir cosas nuevas</li>
          <li>Videojuegos</li>
        </ul>
      </li>
    </ul>
  </div>
)

export default Skills
