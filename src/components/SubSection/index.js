import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styles from './index.module.scss'
import marked from 'marked';

class SubSection extends React.Component {
	render() {
		const image = require(`../../${this.props.imageUrl}`)
		const style = { backgroundImage: `url("${image}")` }
		return (
			<div className={styles.subSection}>
				<div id={this.props.id} className={styles.subSectionAnchor} />
				<figure style={style} />
				<aside>
					<h2>{this.props.title}</h2>
					<h4>{this.props.subtitle}</h4>
					{this.renderComponent()}
					<p>
						{this.renderBlurb()}
						{this.renderLink()}
					</p>
				</aside>
			</div>
		)
	}
	renderBlurb() {
		if (this.props.blurb) {
			return <span dangerouslySetInnerHTML={{__html: marked(this.props.blurb)}} />
		}
	}
	renderLink() {
		if (this.props.link) {
			return <a {...this.props.link} />
		}
	}
	renderComponent() {
		if (this.props.component) {
			return require(`${this.props.component}`)
		}
	}
}

SubSection.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
	imageUrl: PropTypes.string.isRequired,
	blurb: PropTypes.string,
	link: PropTypes.object,
	component: PropTypes.string,
}

export default SubSection
