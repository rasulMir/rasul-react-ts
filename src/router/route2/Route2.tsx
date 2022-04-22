import React from 'react'
import { Outlet } from 'react-router-dom'
import AppBarRoute from './AppBar'

interface Props {}

export default function Route2({}: Props) {
	return (
		<>
			<AppBarRoute/>
			<Outlet/>
		</>
	)
}