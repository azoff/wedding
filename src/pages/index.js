import React from 'react'
import { renderConnectionEdgeNodes } from 'components/Section'

class IndexPage extends React.Component {
  render() {
    return (
      <main>
        {renderConnectionEdgeNodes(this.props.data.allSectionJson)}
      </main>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageQuery {
    allSectionJson {
      edges {
        node {
          title
          imageUrl
          blurb
          link {
            to
            children
          }
        }
      }
    }
  }
`
