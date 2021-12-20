import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
// import photo from '@public/images/photo02.jpeg'
import photo from '@public/images/photo07.jpg'
import clsx from 'clsx'
import styles from './Card.module.scss'

const initialPosition = { positionDetailX: 0, positionDetailY: 0 }

const Card = () => {
  const cardDetail = useRef(null)
  const [maximumDiameter, setMaximumDiameter] = useState(0)
  const [{ positionDetailX, positionDetailY }, setPositionMouse] =
    useState(initialPosition)
  const [isHover, setIsHover] = useState(false)

  const updateValues = (event) => {
    const x = event.pageX - event.target.offsetLeft - maximumDiameter / 2
    const y = event.pageY - event.target.offsetTop - maximumDiameter / 2
    setPositionMouse({
      positionDetailX: x,
      positionDetailY: y,
    })
  }

  const handleMouseEnter = (event) => {
    updateValues(event)
    setIsHover(true)
    setMaximumDiameter(
      Math.max(cardDetail.current.clientWidth, cardDetail.current.clientHeight)
    )
  }
  const handleMouseLeave = (event) => {
    setIsHover(false)
    updateValues(event)
  }

  useEffect(() => {
    const node = cardDetail.current

    node.addEventListener('mouseenter', handleMouseEnter)
    node.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      node.removeEventListener('mouseenter', handleMouseEnter)
      node.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [isHover])

  return (
    <div className={styles.card}>
      <div className={styles.card__image} ref={cardDetail}>
        <div className={styles['card__image-container']}>
          <Image
            src={photo}
            placeholder="blur"
            alt="photo"
            layout="fill"
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
