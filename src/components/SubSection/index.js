import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styles from './index.module.scss'
import marked from 'marked'
import WeddingParty from 'components/WeddingParty'

class SubSection extends React.Component {
  render() {
    const image = require(`../../${this.props.imageUrl}`)
    const style = { backgroundImage: `url("${image}")` }
    const contents = (
      <div>
        <h2>
          {this.props.title}
        </h2>
        <h4>
          {this.props.subtitle}
        </h4>
        {this.renderBlurb()}
        {this.renderComponent()}
      </div>
    )
    if (this.props.imageSize) {
      style.backgroundSize = this.props.imageSize
    }
    if (this.props.href) {
      style.cursor = 'pointer'
    }
    const wrapped = !this.props.component ? (
      <div>
        <figure style={style} onClick={this.onFigureClick} />
        <aside>{contents}</aside>
      </div>
    ) : contents
    return (
      <div className={styles.subSection}>
        <div id={this.props.id} className={styles.subSectionAnchor} />
        {wrapped}
      </div>
    )
  }
  onFigureClick = e => {
    if (this.props.href) {
      window.location.href = this.props.href
    }
  }
  renderBlurb() {
    if (this.props.blurb) {
      let blurb = this.props.blurb
      if (this.props.href) {
        blurb += ` \n\n[Browse  »](${this.props.href})`
      }
      const __html = marked(blurb)
      return (
        <div rel="markdown" dangerouslySetInnerHTML={{ __html  }} />
      )
    }
  }
  renderLink() {
    if (this.props.link) {
      return <a {...this.props.link} />
    }
  }
  renderComponent() {
    if (this.props.component === 'WeddingParty') {
      return <WeddingParty />
    }
  }
}

SubSection.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  imageSize: PropTypes.string,
  blurb: PropTypes.string,
  link: PropTypes.object,
  component: PropTypes.string,
}

export default SubSection
