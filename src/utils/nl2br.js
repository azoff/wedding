import React from 'react'

export default function(text) {
	return text.split('\n').map((item, key) =>
		<span key={key}>
			{item}
			<br />
		</span>
	)
}
