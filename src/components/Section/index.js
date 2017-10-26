import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Facet from 'components/Facet'
import SubSection from 'components/SubSection'
import styles from './index.module.scss'
import Slider from 'react-slick'
import marked from 'marked'
import LazyLoad from 'react-lazy-load'

class Section extends React.Component {
  render() {
    return (
      <section className={styles.section}>
          {this.renderSubNavigation()}
          {this.renderImages()}
          <div className={styles.sectionContent}>
            {this.renderTitle()}
            {this.renderBlurb()}
            {this.renderLink()}
          </div>
          {this.renderFacetContainer()}
      </section>
    )
  }
  renderSubNavigation() {
    const id = this.props.id
    if (!this.props.subSections) {
      return null
    }
    return (
      <nav className={styles.subNavigation}>
        {this.props.subSections.map((s,i) => this.renderSubNavigationLink(id, s, i))}
      </nav>
    )
  }
  renderSubNavigationLink(id, subSection, i) {
    return (
      <a key={`subsection-${i}`} href={`/${id}/#${subSection.id}`}>
        {subSection.title}
      </a>
    )
  }
  renderImages() {
    if (
      this.props.customizations &&
      this.props.customizations.heroImages.length
    ) {
      return this.renderSlider(this.props.customizations.heroImages)
    } else {
      return this.renderSlider([this.props.imageUrl])
    }
  }
  renderSliderImages(urls) {
    return urls.map((url, i) => {
      const absURL = url.indexOf('http') === 0 ? url : require(`../../${url}`)
      const style = { backgroundImage: `url("${absURL}")` }
      return (
        <div key={`i${i}`} className={styles.sectionImageContainer}>
          <div style={style} className={styles.sectionImageBackground} />
          <div style={style} className={styles.sectionImage} />
        </div>
      )
    })
  }
  renderSlider(urls) {
    const settings = {
      arrows: false,
      accessibility: true,
      adaptiveHeight: false,
      variableWidth: false,
      className: styles.sectionSlider,
      autoplay: urls.length > 1,
      autoplaySpeed: 3000,
      dots: urls.length > 1,
      dotsClass: styles.sectionSliderDots,
      infinite: urls.length > 1,
      lazyLoad: false,
      slidesToShow: 1,
      swipe: urls.length > 1,
      slidesToShow: 1,
    }
    return (
      <LazyLoad offset={750} throttle={100}>
        <Slider {...settings}>
          {this.renderSliderImages(urls)}
        </Slider>
      </LazyLoad>
    )
  }
  renderTitle() {
    let title = this.props.title
    const customizations = this.props.customizations
    if (customizations) {
      if (customizations.salutationOverride) {
        title = customizations.salutationOverride
      } else {
        let suffix,
          names = []
        if (customizations.guestFirstName) {
          names.push(customizations.guestFirstName)
        }
        if (customizations.additionFirstName) {
          names.push(customizations.additionFirstName)
        }
        if (customizations.includingNames) {
          if (customizations.includingNames.indexOf('and ') < 0) {
            names.push(`and ${customizations.includingNames}`)
          } else {
            names.push(customizations.includingNames)
          }
          suffix = names.join(', ')
        } else {
          suffix = names.join(' and ')
        }
        title = title.replace(/(\W?$)/, ` ${suffix}$1`)
      }
    }
    return (
      <h2>
        {title}
      </h2>
    )
  }
  renderBlurb() {
    const c = this.props.customizations
    const m = c && c.blurbOverride || this.props.blurb
    const __html = marked(m)
    return <div rel="markdown" dangerouslySetInnerHTML={{ __html }} />
  }
  renderLink() {
    if (this.props.link) {
      return <Link className={styles.sectionLink} {...this.props.link} />
    }
  }
  renderFacetContainer() {
    if (this.props.facets) {
      return (
        <ul className={styles.facets}>
          {this.renderFacets()}
        </ul>
      )
    } else if (this.props.subSections) {
      return (
        <ul className={styles.subSections}>
          {this.renderSubSections()}
        </ul>
      )
    }
  }
  renderFacets() {
    return this.props.facets.map((facet, i) =>
      <li key={`f${i}`}>
        <Facet to={this.props.link ? this.props.link.to : ''} {...facet} />
      </li>
    )
  }
  renderSubSections() {
    return this.props.subSections.map((subSection, i) =>
      <SubSection key={`ss${i}`} {...subSection} />
    )
  }
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
}

export default Section
