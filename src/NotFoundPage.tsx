import React from 'react'
import { Link } from 'react-router-dom'

interface Props {}

export default function NotFoundPage(props: Props) {
	return (
		<div style={{textTransform : 'capitalize', }}>
			page not found
			<Link to='/'>back to main page</Link>
		</div>
	)
}