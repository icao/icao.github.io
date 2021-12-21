import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
// import photo from '@public/images/photo03.jpeg'
import photo from '@public/images/photo06.jpg'
import clsx from 'clsx'
import styles from './Card.module.scss'

const initialPosition = {
  positionDetailX: null,
  positionDetailY: null,
}

const Card = () => {
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
            src={photo}
            placeholder="blur"
            alt="photo"
            layout="responsive"
            objectFit="cover"
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
      <div>
        <h3>Proyecto encabezado</h3>
      </div>
    </div>
  )
}

export default Card
