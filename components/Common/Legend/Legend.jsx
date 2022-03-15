import PropTypes from 'prop-types'
import clsx from 'clsx'
import styles from './Legend.module.scss'

const Legend = ({ text, author, right, center }) => (
  <div className={styles.legend}>
    <div className={styles.legend__content}>
      <h3
        className={clsx(styles.legend__text, {
          [['text__center']]: center,
          [['text__right']]: right,
        })}
      >
        <span className={styles.legend__quote}>&#34;</span>
        <span className={styles.legend__header}>{text}</span>
        <span className={styles.legend__quote}> &#34;</span>
      </h3>
      {author && <p className={styles.legend__author}>{author}</p>}
    </div>
  </div>
)

Legend.propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string,
  right: PropTypes.bool,
  center: PropTypes.bool,
}

Legend.defaultProps = {
  author: null,
  right: false,
  center: false,
}

export default Legend
