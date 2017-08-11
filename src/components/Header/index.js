import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styles from './index.module.scss'

const Header = ({ links, logo, hashtag }) =>
	<header className={styles.header}>
		<HeaderLink {...links[0]} />
		<HeaderLink {...links[1]} />
		<HeaderLogo logo={logo} hashtag={hashtag} />
		<HeaderLink {...links[2]} />
		<HeaderLink {...links[3]} />
	</header>

const HeaderLink = props => <Link className={styles.headerLink} {...props} />

const HeaderLogo = ({ logo, hashtag }) =>
	<div className={styles.headerLogo}>
		<h1>
			<em>
				<Link {...logo} />
			</em>
		</h1>
		<small>
			<a {...hashtag} />
		</small>
	</div>

Header.propTypes = {
	logo: PropTypes.object.isRequired,
	hashtag: PropTypes.object.isRequired,
	links: PropTypes.array.isRequired,
}

export default Header
