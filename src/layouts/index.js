import React from "react"
import Header from "components/Header"
// import Helmet from "react-helmet"

import "./index.scss"

class IndexLayout extends React.Component {
  render() {
    return (
      <div>
        <Header {...this.props.data.header} />
        <main>
          {this.props.children()}
        </main>
      </div>
    )
  }
}

export default IndexLayout

export const layoutQuery = graphql`
  query LayoutQuery {
    header: headerJson {
      header {
        title
        to
      }
      subheader {
        text
        href
      }
      links {
        title
        to
      }
    }
  }
`
