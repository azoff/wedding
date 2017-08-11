import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"

const Header = ({ links }) =>
	<header>
		{links.map(HeaderLink)}
	</header>

const HeaderLink = ({ to, title }, i) =>
	<Link key={`header-link-${i}`} to={to}>
		{title}
	</Link>

Header.propTypes = {
	links: PropTypes.array.isRequired,
}

export default Header
