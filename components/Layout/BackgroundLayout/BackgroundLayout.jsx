import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styles from './BackgroundLayout.module.scss'

const BackgroundLayout = ({ src, children }) => {
  const [source, setSource] = useState('/images/for-test.jpg')

  useEffect(() => {
    const img = new Image()
    img.src = src
    img.onload = () => setSource(src)
  }, [src])

  return (
    <div
      style={{ backgroundImage: `url(${source})` }}
      className={styles.layout}
    >
      {children}{' '}
    </div>
  )
}

BackgroundLayout.defaultProps = {
  src: '/images/background_test.jpg',
}

BackgroundLayout.propTypes = {
  src: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default BackgroundLayout
