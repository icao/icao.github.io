import styles from '@components/Layout/Home/Home.module.scss'
import Typewriter from './Typewriter'

export default {
  title: 'Components/Common/Typewriter',
  component: Typewriter,
}

// 👇 We create a “template” of how args map to rendering
const Template = (args) => <Typewriter {...args} />

export const Default = () => <Typewriter />

// 👇 Each story then reuses that template
export const WithPropSringsInOptions = Template.bind({})
WithPropSringsInOptions.args = {
  options: {
    strings: [
      'I am message 1!',
      'And me, the message 2!',
      'This is other message',
    ],
    typeSpeed: 50,
    startDelay: 100,
    backSpeed: 10,
    loop: true,
    backDelay: 1200,
    loopCount: false,
    showCursor: true,
    cursorChar: ' |',
  },
}

export const WithNestedStrings = () => (
  <Typewriter
    options={{
      stringsElement: '#strings',
      typeSpeed: 50,
      startDelay: 100,
      backSpeed: 10,
      loop: true,
      backDelay: 1200,
      loopCount: false,
      showCursor: true,
    }}
  >
    <div id="strings">
      <p>
        Soy de la{' '}
        <span className={styles['color-enphasis']}>Ciudad de México</span>
      </p>
      <p>
        Tengo experiencia
        <span className={styles['color-enphasis']}>creando interfaces</span>
      </p>
      <p>
        Desarrollo{' '}
        <span className={styles['color-enphasis']}>aplicaciones web</span>
      </p>
      <p>
        <span className={styles['color-enphasis']}>Amo</span> el diseño
      </p>
      <p>
        Me gusta implementar
        <span className={styles['color-enphasis']}>diseños inovadores</span>
      </p>
    </div>
  </Typewriter>
)
