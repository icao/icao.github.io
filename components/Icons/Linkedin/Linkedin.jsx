import PropTypes from 'prop-types'
import useHover from '@hooks/useHover'

const Linkedin = ({ color, hoverColor }) => {
  const [refElement, isHover] = useHover()

  return (
    <div style={{ width: '100%', height: 'auto', display: 'flex' }}>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        ref={refElement}
      >
        <path
          d="M464 0h-416c-26.4 0-48 21.6-48 48v416c0 26.4 21.6 48 48 48h416c26.4 0 48-21.6 48-48v-416c0-26.4-21.6-48-48-48zM192 416h-64v-224h64v224zM160 160c-17.7 0-32-14.3-32-32s14.3-32 32-32c17.7 0 32 14.3 32 32s-14.3 32-32 32zM416 416h-64v-128c0-17.7-14.3-32-32-32s-32 14.3-32 32v128h-64v-224h64v39.7c13.2-18.1 33.4-39.7 56-39.7 39.8 0 72 35.8 72 80v144z"
          fill={isHover ? hoverColor || color : color}
          style={{ transition: 'all 0.5s ease-out' }}
        />
      </svg>
    </div>
  )
}

Linkedin.propTypes = {
  color: PropTypes.string.isRequired,
  hoverColor: PropTypes.string,
}

Linkedin.defaultProps = {
  hoverColor: null,
}

export default Linkedin
