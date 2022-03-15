import PropTypes from 'prop-types'
import useHover from '@hooks/useHover'

const Codepen = ({ color, hoverColor }) => {
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
          d="M472.875 184.021l-224-149.333c-5.374-3.583-12.376-3.583-17.75 0l-224 149.333c-4.451 2.967-7.125 7.963-7.125 13.312v149.333c0 5.35 2.674 10.346 7.125 13.312l224 149.333c2.687 1.792 5.781 2.688 8.875 2.688s6.188-0.896 8.875-2.688l224-149.333c4.451-2.967 7.125-7.963 7.125-13.312v-149.333c0-5.349-2.674-10.345-7.125-13.312zM240 327.438l-83.156-55.438 83.156-55.437 83.156 55.437-83.156 55.438zM256 188.771v-110.875l179.155 119.438-83.155 55.437-96-64zM224 188.771l-96 64-83.156-55.437 179.156-119.438v110.875zM99.156 272l-67.156 44.771v-89.541l67.156 44.77zM128 291.229l96 64v110.874l-179.156-119.436 83.156-55.438zM256 355.229l96-64 83.156 55.438-179.156 119.437v-110.875zM380.844 272l67.156-44.77v89.542l-67.156-44.772z"
          fill={isHover ? hoverColor || color : color}
          style={{ transition: 'all 0.5s ease-out' }}
        />
      </svg>
    </div>
  )
}

Codepen.propTypes = {
  color: PropTypes.string.isRequired,
  hoverColor: PropTypes.string,
}

Codepen.defaultProps = {
  hoverColor: null,
}

export default Codepen
