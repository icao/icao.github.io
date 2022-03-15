import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import Close from '@components/Icons/Close/Close'
import useKeyPress from '@hooks/useKeyPress'
import styles from './Modal.module.scss'

const Modal = ({ showModal, children }) => {
  const { isKeyPressed } = useKeyPress('Escape')

  const refOutModal = useRef()

  useEffect(() => {
    if (isKeyPressed) {
      showModal(false)
    }
  })

  const handleClick = (e) => {
    if (e.target === refOutModal.current) {
      showModal(false)
    }
  }

  return (
    <div
      className={styles.modal}
      ref={refOutModal}
      onClick={handleClick}
      aria-hidden="true"
    >
      <div className={styles.modal__content}>
        <button
          className={styles.modal__button}
          type="button"
          onClick={() => showModal(false)}
        >
          <Close color="#e7eeff" />
        </button>
        {children}
      </div>
    </div>
  )
}

Modal.propTypes = {
  showModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}

export default Modal
