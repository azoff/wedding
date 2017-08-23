import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styles from './index.module.scss'
import nl2br from 'utils/nl2br'

const Footer = ({ logoUrl, text }) =>
  <footer className={styles.footer}>
    <img src={require(`../../${logoUrl}`)} alt="logo" />
    <div className={styles.footerContent}>
      {nl2br(text)}
    </div>
  </footer>

Footer.propTypes = {
  logoUrl: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default Footer
