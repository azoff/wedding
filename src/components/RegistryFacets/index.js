import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.scss'
import Link from 'gatsby-link'

class RegistryFacets extends React.Component {

	renderFacet = (facet, i) => (
		<div key={`registry-facet-${i}`} className={styles.facet}>
			<img title={facet.title} alt={facet.title} src={require(`../../${facet.imageUrl}`)} />
			<h3>{facet.title}</h3>
      <Link to={`/registry/#${facet.fragment}`}>Learn More »</Link>
			<a href={facet.href}>Browse »</a>
		</div>
	)

  renderFacets() {
  	return this.props.facets.map(this.renderFacet)
  }

  render() {
    return (
      <div className={styles.registryFacets}>
      	{this.renderFacets()}
      </div>
    )
  }

}

RegistryFacets.propTypes = {
  facets: PropTypes.array.isRequired,
}

export default RegistryFacets