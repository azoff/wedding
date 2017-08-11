import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"

const Header = ({ links, header, subheader }) =>
	<header>
		{links
			.slice(0, 2)
			.map((link, i) => <HeaderLink key={`hl${i}`} {...link} />)}
		<MainHeaderLink header={header} subheader={subheader} />
		{links
			.slice(2, 4)
			.map((link, i) => <HeaderLink key={`hl${i}`} {...link} />)}
	</header>

const HeaderLink = ({ to, title }) =>
	<Link to={to}>
		{title}
	</Link>

const MainHeaderLink = ({ header, subheader }) =>
	<div>
		<HeaderLink {...header} />
		<a href={subheader.href}>
			{subheader.text}
		</a>
	</div>

Header.propTypes = {
	links: PropTypes.array.isRequired,
}

export default Header
