import { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
import clsx from 'clsx'
// import photo from '/public/images/photo02.jpeg'
// import photo from '@public/images/photo07.jpg'
import styles from './Card.module.scss'

const initialPosition = {
  positionDetailX: null,
  positionDetailY: null,
}

const Card = ({ urlImage, title }) => {
  const cardDetail = useRef(null)

  const [isHover, setIsHover] = useState(false)
  const [maximumDiameter, setMaximumDiameter] = useState(null)
  const [{ positionDetailX, positionDetailY }, setPositionMouse] =
    useState(initialPosition)

  const updateValues = (event) => {
    setPositionMouse({
      positionDetailX:
        event.pageX - event.target.offsetLeft - maximumDiameter / 2,
      positionDetailY:
        event.pageY - event.target.offsetTop - maximumDiameter / 2,
    })
  }

  const handleMouseEnter = (event) => {
    setIsHover(true)
    updateValues(event)
  }
  const handleMouseLeave = (event) => {
    setIsHover(false)
    updateValues(event)
  }

  useEffect(() => {
    const node = cardDetail.current

    setMaximumDiameter(
      Math.max(cardDetail.current.clientWidth, cardDetail.current.clientHeight)
    )

    node.addEventListener('mouseenter', handleMouseEnter)
    node.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      node.removeEventListener('mouseenter', handleMouseEnter)
      node.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [isHover, maximumDiameter])

  return (
    <div className={styles.card}>
      <div className={styles.card__image} ref={cardDetail}>
        <div className={styles['card__image-container']}>
          <Image
            // src={photo}
            // placeholder="blur"
            // alt="photo"
            // layout="responsive"
            // objectFit="cover"
            src={urlImage}
            layout="fill"
            className={styles.image}
            objectFit="contain"
          />
        </div>
        <div
          className={clsx(styles.card__detail, {
            [styles['card__detail--animated']]: isHover,
          })}
          style={{
            width: `${maximumDiameter}px`,
            height: `${maximumDiameter}px`,
            top: `${positionDetailY}px`,
            left: `${positionDetailX}px`,
          }}
        />
      </div>
      <div className={styles.card__footer}>
        <h3 className={styles.card__title}>{title}</h3>
      </div>
    </div>
  )
}

Card.propTypes = {
  urlImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Card
