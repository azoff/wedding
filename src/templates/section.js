import React from 'react'
import Section from 'components/Section'

class SectionPageTemplate extends React.Component {
  render() {
    return (
      <main>
        <Section {...this.props.data.sectionJson} />
      </main>
    )
  }
}

export default SectionPageTemplate

export const pageQuery = graphql`
  query SectionPageTemplateQuery($id: String = "") {
    sectionJson(id: { eq: $id }) {
      id
      title
      imageUrl
      blurb
      subSections: facets {
        title
        subtitle
        imageUrl
        imageSize
        id: fragment
        blurb
        href
        component
      }
    }
  }
`
