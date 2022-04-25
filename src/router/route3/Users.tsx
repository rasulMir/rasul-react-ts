
import React from 'react'
import { useLocation } from 'react-router-dom'

interface Props {}

export default function Users({}: Props) {
	let location = useLocation();
	return (
		<div>Users ({ location.pathname })</div>
	)
}