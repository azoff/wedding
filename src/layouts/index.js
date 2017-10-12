import React from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'
// import Helmet from "react-helmet"

import './index.scss'

class IndexLayout extends React.Component {
  constructor() {
    super()
    this.state = { opacity: 0 }
  }

  render() {
    return (
      <div className="layout" style={this.state}>
        <Header {...this.props.data.header} />
        {this.props.children()}
        <Footer {...this.props.data.footer} />
      </div>
    )
  }

  componentDidMount() {
    this.setState({ opacity: 1 })
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
    footer: footerJson {
      logoUrl
      text
    }
  }
`
