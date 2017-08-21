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
  query SectionPageTemplateQuery($path:String = "") {
    sectionJson(path:{eq:$path}) {
      title
      imageUrl
      blurb
      subSections: facets {
        title
        subtitle
        imageUrl
        id: fragment
        blurb
        link
        component
      }
    }
  }
`
