import { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
import clsx from 'clsx'
import OpenModal from '@components/Icons/OpenModal/OpenModal'
import ArrowRight from '@components/Icons/ArrowRight/ArrowRight'
import styles from './Card.module.scss'

const initialPosition = {
  positionDetailX: null,
  positionDetailY: null,
}

const Card = ({
  moduleImage,
  title,
  tag,
  designAlternative,
  urlExternalImage,
  isURLExternal,
}) => {
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
          {!isURLExternal ? (
            <Image
              src={moduleImage.src}
              layout="fill"
              className={styles.image}
              objectFit="contain"
              placeholder="blur"
              blurDataURL={moduleImage.blurDataURL}
            />
          ) : (
            <Image
              src={urlExternalImage}
              layout="fill"
              className={styles.image}
              objectFit="contain"
              // placeholder="blur" No se genera el efecto blur sin un link que fue importado dinamicamente con import
            />
          )}
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

        {!designAlternative && (
          <div className={styles['card__icon-container']}>
            <div
              className={clsx(styles.card__icon, {
                [styles['card__icon--animated']]: isHover,
              })}
            >
              <OpenModal color="#e7eeff" />
            </div>
          </div>
        )}

        {designAlternative && (
          <div className={styles.design__alternative}>
            <div className={styles.design__alternative__filter} />
            <div className={styles.design__alternative__content}>
              <p className={styles.design__alternative__tags}>{tag}</p>
              <h3 className={styles.design__alternative__title}>{title}</h3>
              <div className={styles.design__alternative__view}>
                <p className={styles.design__alternative__p}>Ver detalle </p>
                <div className={styles.design__alternative__arrow}>
                  <ArrowRight color="#e7eeff" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {!designAlternative && (
        <div className={styles.card__footer}>
          <h3 className={styles.card__title}>{title}</h3>
        </div>
      )}
    </div>
  )
}

Card.defaultProps = {
  moduleImage: {
    blurDataURL: null,
    src: null,
  },
  tag: null,
  designAlternative: false,
  urlExternalImage: null,
  isURLExternal: false,
}

Card.propTypes = {
  moduleImage: PropTypes.shape({
    blurDataURL: PropTypes.string,
    src: PropTypes.string,
  }),
  title: PropTypes.string.isRequired,
  tag: PropTypes.string,
  designAlternative: PropTypes.bool,
  urlExternalImage: PropTypes.string,
  isURLExternal: PropTypes.bool,
}

export default Card
