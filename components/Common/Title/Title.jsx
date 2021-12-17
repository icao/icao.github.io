import PropTypes from 'prop-types'
import styles from './Title.module.scss'

const Title = ({
  text,
  textEmphasis,
  positionEmphasisAfter,
  positionEmphasisBefore,
}) => (
  <h2 className={styles.title}>
    {positionEmphasisBefore && (
      <span className={styles['text-emphasis']}>{`${textEmphasis} `}</span>
    )}
    {text}
    {positionEmphasisAfter && (
      <span className={styles['text-emphasis']}>{` ${textEmphasis}`}</span>
    )}
  </h2>
)

Title.propTypes = {
  text: PropTypes.string.isRequired,
  textEmphasis: PropTypes.string,
  positionEmphasisAfter: PropTypes.bool,
  positionEmphasisBefore: PropTypes.bool,
}

Title.defaultProps = {
  textEmphasis: null,
  positionEmphasisAfter: false,
  positionEmphasisBefore: false,
}

export default Title
