import React from 'react'
import { Link } from 'react-router-dom'

interface Props {}

export default function Main({}: Props) {
	return (
		<div>
			<h3>the simpsons</h3>
			<Link to='charachters'>characters</Link>
			<Link to='episodes'>episodes</Link>
		</div>
	)
}