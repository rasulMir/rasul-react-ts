import React from 'react'
import { useLocation } from 'react-router-dom'

interface Props {}

export default function Peter({}: Props) {
	let location = useLocation();
	return (
		<div>Peter ({ location.pathname })</div>
	)
}