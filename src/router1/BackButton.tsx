import React from 'react'
import { Link } from 'react-router-dom'

interface Props {
	path : string
}

export default function BackButton({ path }: Props) {
	return (
		<Link to={path} className='back'>
			<i className="fa fa-arrow-left" aria-hidden="true"></i>
			Back
		</Link>
	)
}