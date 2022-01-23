import Image from 'next/image'
import styles from './Icao.module.scss'

const Icao = () => (
  <div className={styles.icao}>
    <div className={styles['icao__profile-photo']}>
      <Image
        src="/images/photo_01.jpg"
        layout="fill"
        className={styles.icao__image}
        objectFit="contain"
      />
    </div>
    <div className={styles.icao__about}>
      <p>
        Hola! Gracias por tomarte el tiempo de conocerme, es un placer para mi
        que estes aqui.
      </p>
      <p>
        Dejame presentarme, mi nombre es Ildefonso César Aparicio Orozco, soy
        Mexicano y resido actualmente en la ciudad de México.
      </p>
      <p>
        Soy Front End Developer y amante del diseño, tengo pasión por
        implementar UI modernas, sobre todo inovadoras. La curiosidad me alienta
        a estar en continuo aprendizaje y me llevó a encontrar un área en el
        desarrollo web, en la cual decidí empeñar mi talento.
      </p>
      <p>
        Me encanta lo que hago, me gusta involucrarme con personas de distintar
        áreas y asi formar un pensamiento interdiciplinario, lo cual va de la
        mano con la implementacion de software.
      </p>
      <p>
        Cuando no programo, me gusta tomar fotografias, aun soy un fotografo
        amateur, pero me llaman las calles y las personas, por eso me gusta el
        estilo de street photography.
      </p>
      <p>
        Me encanta escuchar musica para la ocasion, disfruto en hacerlo mientras
        trabajo.
      </p>
      <p>
        Y no dejo a un lado los videojuegos, confiezo que me gusta el universo
        de World of Warcraft y Halo.
      </p>

      <p>
        Si quieres conocer mas de mis detalles profesionales, considera seguir
        explorando mas abajo, adelante.
      </p>
    </div>
  </div>
)

export default Icao
