import React from 'react'
import Header from 'components/Header'
// import Helmet from "react-helmet"

import './index.scss'

class IndexLayout extends React.Component {
  render() {
    return (
      <div>
        <Header {...this.props.data.header} />
        {this.props.children()}
      </div>
    )
  }
}

export default IndexLayout

export const layoutQuery = graphql`
  query IndexLayoutQuery {
    header: headerJson {
      logo {
        children
        to
      }
      hashtag {
        children
        href
      }
      links {
        children
        to
      }
    }
  }
`