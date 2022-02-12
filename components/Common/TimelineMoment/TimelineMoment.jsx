import PropTypes from 'prop-types'
import clsx from 'clsx'
import styles from './TimelineMoment.module.scss'

const TimelineMoment = ({
  children,
  arrowUp,
  arrowRight,
  arrowLeft,
  arrowDown,
}) => (
  <div
    className={clsx(
      { [styles['moment__up-arrow']]: arrowUp },
      { [styles['moment__left-arrow']]: arrowLeft },
      { [styles['moment__down-arrow']]: arrowDown },
      { [styles['moment__right-arrow']]: arrowRight }
    )}
  >
    <div
      className={clsx(
        { [styles['moment__dot--left']]: arrowLeft },
        { [styles['moment__dot--right']]: arrowRight }
      )}
    />
    {children}
  </div>
)

TimelineMoment.propTypes = {
  children: PropTypes.node.isRequired,
  arrowUp: PropTypes.bool,
  arrowRight: PropTypes.bool,
  arrowDown: PropTypes.bool,
  arrowLeft: PropTypes.bool,
}

TimelineMoment.defaultProps = {
  arrowUp: false,
  arrowRight: false,
  arrowDown: false,
  arrowLeft: false,
}

export default TimelineMoment
