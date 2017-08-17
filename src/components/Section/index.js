import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Facet from 'components/Facet'
import styles from './index.module.scss'

class Section extends React.Component {
	render() {
		return (
			<section>
				<img
					className={styles.sectionImage}
					src={require(`../../${this.props.imageUrl}`)}
					alt={`Image for "${this.props.title}"`}
				/>
				<div className={styles.sectionContent}>
					<h2>
						{this.props.title}
					</h2>
					<p>
						{this.props.blurb}
						{this.renderLink()}
					</p>
				</div>
				{this.renderFacetContainer()}
			</section>
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

Section.renderConnectionEdgeNodes = c => c.edges.map((edge, i) => <Section key={`s${i}`} {...edge.node} />)

Section.propTypes = {
	title: PropTypes.string.isRequired,
	imageUrl: PropTypes.string.isRequired,
}

export default Section
