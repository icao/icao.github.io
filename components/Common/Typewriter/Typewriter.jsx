import { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import Typed from 'typed.js'

const Typewriter = ({ options, children }) => {
  const element = useRef(null)
  const typed = useRef(null)

  useEffect(() => {
    typed.current = new Typed(element.current, options)
    return () => {
      typed.current.destroy()
    }
  }, [])

  return (
    <>
      <div ref={element} style={{ display: 'inline' }} />

      {children}
    </>
  )
}

Typewriter.propTypes = {
  options: PropTypes.shape({
    strings: PropTypes.arrayOf(PropTypes.string),
    typeSpeed: PropTypes.number,
    startDelay: PropTypes.number,
    backSpeed: PropTypes.number,
    loop: PropTypes.bool,
    backDelay: PropTypes.number,
    loopCount: PropTypes.bool,
    showCursor: PropTypes.bool,
    cursorChar: PropTypes.string,
  }),
  children: PropTypes.node,
}

Typewriter.defaultProps = {
  options: {
    strings: [
      'Add in opions your messages!',
      'Show here your message!',
      'Try adding your message with the options prop',
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
  children: null,
}

export default Typewriter
