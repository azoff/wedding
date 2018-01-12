import React from 'react'
import Section from 'components/Section'

class IndexPage extends React.Component {
  render() {
    return (
      <main>
        {this.renderSections()}
      </main>
    )
  }
  renderSections() {
    return this.props.data.allSectionJson.edges.map(({ node }, i) =>
      this.renderSection(node, i)
    )
  }
  renderSection(node, i) {
    const record = this.props.data.airtableRecord
    if (i === 0 && record) {
      return <Section key={`s${i}`} {...node} {...record} />
    } else {
      return <Section key={`s${i}`} {...node} />
    }
  }
}

export default IndexPage

export const pageQuery = graphql`
  query RootPageQuery {
    allSectionJson {
      edges {
        node {
          title
          component
          imageUrl
          blurb
          link {
            to
            children
          }
          facets {
            title
            subtitle
            imageUrl
            fragment
            link
            blurb
          }
        }
      }
    }
  }
`
