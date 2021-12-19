import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
// import useHover from '@hooks/useHover'
import photo from '@public/images/photo01.jpeg'
// import photo from '@public/images/photo07.jpg'
import clsx from 'clsx'
import styles from './Card.module.scss'

const initialPosition = { positionDetailX: 0, positionDetailY: 0 }

const Card = () => {
  const cardDetail = useRef(null)
  // const [refElement, isHover] = useHover()
  const [maximumDiameter, setMaximumDiameter] = useState(0)
  const [{ positionDetailX, positionDetailY }, setPositionMouse] =
    useState(initialPosition)
  const [isAnimated, setIsAnimated] = useState(false)

  useEffect(() => {})

  const updateValues = (event) => {
    const x = event.pageX - event.target.offsetLeft - maximumDiameter / 2
    const y = event.pageY - event.target.offsetTop - maximumDiameter / 2

    setMaximumDiameter(
      Math.max(cardDetail.current.clientWidth, cardDetail.current.clientHeight)
    )

    setPositionMouse({
      positionDetailX: x,
      positionDetailY: y,
    })
  }

  const handleMouseEnter = (event) => {
    updateValues(event)
    setIsAnimated(true)
  }

  const handleMouseLeave = (event) => {
    updateValues(event)
    setIsAnimated(false)
  }

  //  let x = event.pageX - event.target.offsetLeft - maximumMeasure / 2
  //  let y = event.pageY - event.target.offsetTop - maximumMeasure / 2

  //  detail.style.setProperty('top', `${y}px`)
  //  detail.style.setProperty('left', `${x}px`)

  //  detail.classList.add('detail--animated')

  return (
    <div className={styles.card}>
      <div
        className={styles.card__image}
        ref={cardDetail}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          // ref={refElement}
          className={styles['card__image-container']}
        >
          {/* {console.log(positionDetailX, positionDetailY)} */}
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
            [styles['card__detail--animated']]: isAnimated,
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
