import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styles from './index.module.scss'
import nl2br from 'utils/nl2br'

class SubSection extends React.Component {
	render() {
		const image = require(`../../${this.props.imageUrl}`)
		return (
			<div id={this.props.id} className={styles.subSection}>
				<img src={image} />
				<h2>{this.props.title}</h2>
				<h4>{this.props.subtitle}</h4>
				<p>{nl2br(this.props.blurb)}</p>
			</div>
		)
	}
}

SubSection.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
	blurb: PropTypes.string.isRequired,
	imageUrl: PropTypes.string.isRequired,
}

export default SubSection
