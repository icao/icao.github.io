import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styles from './BackgroundLayout.module.scss'

const BackgroundLayout = ({
  src,
  placeholderBlur,
  children,
  backgroundPosition,
}) => {
  const [source, setSource] = useState(placeholderBlur)

  useEffect(() => {
    const img = new Image()
    img.src = src
    img.onload = () => setSource(src)
  }, [src])

  return (
    <div
      style={{
        backgroundImage: `url(${source})`,
        backgroundPosition,
      }}
      className={styles.layout}
    >
      {children}
    </div>
  )
}

BackgroundLayout.defaultProps = {
  backgroundPosition: 'center',
}

BackgroundLayout.propTypes = {
  src: PropTypes.string.isRequired,
  placeholderBlur: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  backgroundPosition: PropTypes.string,
}

export default BackgroundLayout
