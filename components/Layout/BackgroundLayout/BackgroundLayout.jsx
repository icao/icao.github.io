import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styles from './BackgroundLayout.module.scss'

const BackgroundLayout = ({
  src,
  placeholderBlur,
  children,
  backgroundPositionBottom,
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
        backgroundPosition: backgroundPositionBottom && 'bottom',
      }}
      className={styles.layout}
    >
      {children}
    </div>
  )
}

BackgroundLayout.defaultProps = {
  backgroundPositionBottom: false,
}

BackgroundLayout.propTypes = {
  src: PropTypes.string.isRequired,
  placeholderBlur: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  backgroundPositionBottom: PropTypes.bool,
}

export default BackgroundLayout
