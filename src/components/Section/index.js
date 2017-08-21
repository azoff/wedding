import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Facet from 'components/Facet'
import styles from './index.module.scss'
import Slider from 'react-slick';
import nl2br from 'utils/nl2br';

class Section extends React.Component {
	render() {
		return (
			<section className={styles.section}>
				{this.renderImages()}
				<div className={styles.sectionContent}>
					{this.renderTitle()}
					<p>
						{nl2br(this.props.blurb)}
						{this.renderLink()}
					</p>
				</div>
				{this.renderFacetContainer()}
			</section>
		)
	}
	renderImages() {
		if (this.props.customizations && this.props.customizations.heroImages.length) {
			return this.renderSlider(this.props.customizations.heroImages)
		} else {
			return this.renderSlider([require(`../../${this.props.imageUrl}`)])
		}
	}
	renderSliderImages(urls) {
		return urls.map((url,i) =>
			<div key={`i${i}`} className={styles.sectionImageContainer}>
				<div style={{ backgroundImage: `url("${url}")` }} className={styles.sectionImageBackground}></div>
				<div style={{ backgroundImage: `url("${url}")` }} className={styles.sectionImage} />
			</div>
		)
	}
	renderSlider(urls) {
		const settings = {
			arrows:	false,
			accessibility: true,
			adaptiveHeight:	false,
			variableWidth: false,
			className: styles.sectionSlider,
			autoplay: urls.length > 1,
			autoplaySpeed: 5000,
			dots: urls.length > 1,
			dotsClass: styles.sectionSliderDots,
			infinite: urls.length > 1,
			lazyLoad:	false,
			slidesToShow:	1,
			swipe: urls.length > 1,
			slidesToShow: 1
		}
		return (
			<Slider {...settings}>
				{this.renderSliderImages(urls)}
			</Slider>
		)
	}
	renderTitle() {
		let title = this.props.title
		const customizations = this.props.customizations
		if (customizations) {
			let suffix, names = [];
			if (customizations.guestFirstName) {
				names.push(customizations.guestFirstName)
			}
			if (customizations.additionFirstName) {
				names.push(customizations.additionFirstName)
			}
			if (customizations.includingNames) {
				names.push(customizations.includingNames)
				if (customizations.includingNames.indexOf('and ') < 0) {
					names.push(`and ${customizations.includingNames}`)
				}
				suffix = names.join(', ')
			} else {
				suffix = names.join(' and ')
			}
			title = title.replace(/(\W?$)/, ` ${suffix}$1`);
		}
		return (
			<h2>{title}</h2>
		)
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
		}
	}
	renderFacets() {
		return this.props.facets.map((facet, i) =>
			<li key={`f${i}`}>
				<Facet to={this.props.link.to} {...facet} />
			</li>
		)
	}
}

Section.propTypes = {
	title: PropTypes.string.isRequired,
	imageUrl: PropTypes.string.isRequired,
}

export default Section
