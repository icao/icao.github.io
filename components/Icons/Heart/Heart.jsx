import PropTypes from 'prop-types'
import useHover from '@hooks/useHover'

const Heart = ({ color, hoverColor }) => {
  const [refElement, isHover] = useHover()

  return (
    <span style={{ width: '100%', height: 'auto', display: 'flex' }}>
      <svg
        aria-hidden="true"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        ref={refElement}
      >
        <path
          d="M472.1 270.5l-193.1 199.7c-12.64 13.07-33.27 13.08-45.91 .0107l-193.2-199.7C-16.21 212.5-13.1 116.7 49.04 62.86C103.3 15.88 186.4 24.42 236.3 75.98l19.7 20.27l19.7-20.27c49.95-51.56 132.1-60.1 187.3-13.12C525.1 116.6 528.2 212.5 472.1 270.5z"
          fill={isHover ? hoverColor || color : color}
          style={{ transition: 'all 0.5s ease-out' }}
        />
      </svg>
    </span>
  )
}

Heart.propTypes = {
  color: PropTypes.string.isRequired,
  hoverColor: PropTypes.string,
}

Heart.defaultProps = {
  hoverColor: null,
}

export default Heart
