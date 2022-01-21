import PropTypes from 'prop-types'

import styles from './Hero.module.scss'

const Hero = ({ children }) => (
  <section className={styles.hero}>{children}</section>
)

Hero.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Hero
