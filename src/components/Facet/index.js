import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styles from './index.module.scss'

class Facet extends React.Component {
  render() {
    const image = require(`../../${this.props.imageUrl}`)
    const to = `${this.props.to}/#${this.props.fragment}`
    const style = { backgroundImage: `url("${image}")` }
    return (
      <Link style={style} className={styles.facet} to={to}>
        <h3>
          {this.props.title}
        </h3>
        <h5>
          {this.props.subtitle}
        </h5>
      </Link>
    )
  }
}

Facet.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  fragment: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
}

export default Facet
