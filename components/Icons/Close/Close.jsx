import PropTypes from 'prop-types'
import useHover from '@hooks/useHover'

const Close = ({ color, hoverColor }) => {
  const [refElement, isHover] = useHover()

  return (
    <div style={{ width: '100%', height: 'unset' }}>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        ref={refElement}
      >
        <path
          d="M10 8.586l-7.071-7.071-1.414 1.414 7.071 7.071-7.071 7.071 1.414 1.414 7.071-7.071 7.071 7.071 1.414-1.414-7.071-7.071 7.071-7.071-1.414-1.414-7.071 7.071z"
          fill={isHover ? hoverColor || color : color}
          style={{ transition: 'all 0.3s ease-out' }}
        />
      </svg>
    </div>
  )
}

Close.propTypes = {
  color: PropTypes.string.isRequired,
  hoverColor: PropTypes.string,
}

Close.defaultProps = {
  hoverColor: null,
}

export default Close
