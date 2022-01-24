import PropTypes from 'prop-types'
import useHover from '@hooks/useHover'

const Envelope = ({ color, hoverColor }) => {
  const [refElement, isHover] = useHover()

  return (
    <div style={{ width: '100%', height: 'auto' }}>
      <svg
        aria-hidden="true"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        ref={refElement}
      >
        <path
          d="M448 64H64C28.65 64 0 92.65 0 128v256c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64V128C512 92.65 483.3 64 448 64zM64 112h384c8.822 0 16 7.178 16 16v22.16l-166.8 138.1c-23.19 19.28-59.34 19.27-82.47 .0156L48 150.2V128C48 119.2 55.18 112 64 112zM448 400H64c-8.822 0-16-7.178-16-16V212.7l136.1 113.4C204.3 342.8 229.8 352 256 352s51.75-9.188 71.97-25.98L464 212.7V384C464 392.8 456.8 400 448 400z"
          fill={isHover ? hoverColor || color : color}
          style={{ transition: 'all 0.5s ease-out' }}
        />
      </svg>
    </div>
  )
}

Envelope.propTypes = {
  color: PropTypes.string.isRequired,
  hoverColor: PropTypes.string,
}

Envelope.defaultProps = {
  hoverColor: null,
}

export default Envelope
