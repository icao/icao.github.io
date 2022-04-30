import { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import styles from './BackgroundLayout.module.scss'

const BackgroundLayout = ({
  src,
  placeholderBlur,
  children,
  backgroundPosition,
}) => {
  const [source, setSource] = useState('')
  const refBgLayout = useRef(null)
  const [isBgLoaded, setIsBgLoaded] = useState(false)

  function getImage(url) {
    return new Promise((resolve, reject) => {
      const img = new Image()
      img.onload = () => {
        resolve(url)
      }

      img.onerror = () => {
        reject(url)
      }

      img.src = url
    })
  }

  // useEffect - Intersection Observer para cargar la imagen
  function callback(entries) {
    if (entries[0].isIntersecting && isBgLoaded === false) {
      setSource(placeholderBlur)
      // refBgLayout.current.style.backgroundImage = `url(${placeholderBlur}
      getImage(src)
        .then(() => {
          setSource(src)
          // refBgLayout.current.style.backgroundImage = `url(${src})`
        })
        .catch((error) => {
          throw new Error(error)
        })

      setIsBgLoaded(true)
    }
  }

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0,
  }

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options)

    if (refBgLayout.current) {
      observer.observe(refBgLayout.current)
    }

    return () => {
      if (refBgLayout.current) {
        observer.unobserve(refBgLayout.current)
      }
    }
  }, [src, isBgLoaded])

  return (
    <div
      ref={refBgLayout}
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
