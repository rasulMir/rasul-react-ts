import React from 'react'
import { useLocation } from 'react-router-dom'

interface Props {}

export default function Vasya({}: Props) {
	let location = useLocation();
	return (
		<div>Vasya ({ location.pathname })</div>
	)
}