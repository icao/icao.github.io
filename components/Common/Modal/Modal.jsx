import Close from '@components/Icons/Close/Close'
import styles from './Modal.module.scss'

const Modal = () => (
  <div className={styles.modal}>
    <div className={styles.modal__content}>
      <button className={styles.modal__button} type="button">
        <Close color="#e7eeff" hoverColor="#dd013f" />
      </button>
    </div>
  </div>
)

export default Modal
