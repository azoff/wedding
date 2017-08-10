import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import Header from "components/Header"
import "./index.scss"

const TemplateWrapper = ({ children }) =>
	<div>
		<Helmet />
		<Header />
		{children()}
	</div>

TemplateWrapper.propTypes = {
	children: PropTypes.func,
}

export default TemplateWrapper
