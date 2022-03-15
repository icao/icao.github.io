import PropTypes from 'prop-types'
import useHover from '@hooks/useHover'

const ArrowRight = ({ color, hoverColor }) => {
  const [refElement, isHover] = useHover()

  return (
    <div style={{ width: '100%', height: 'auto', display: 'flex' }}>
      <svg
        aria-hidden="true"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        ref={refElement}
      >
        <path
          d="M24 11.871l-5-4.871v3h-19v4h19v3z"
          fill={isHover ? hoverColor || color : color}
          style={{ transition: 'all 0.5s ease-out' }}
        />
      </svg>
    </div>
  )
}

ArrowRight.propTypes = {
  color: PropTypes.string.isRequired,
  hoverColor: PropTypes.string,
}

ArrowRight.defaultProps = {
  hoverColor: null,
}

export default ArrowRight
