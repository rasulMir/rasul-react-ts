import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

interface Props {}

export default function PizzaMain({}: Props) {
	return (
		<div className='pizza-wrap'>
			<header className="header">
				<NavLink to='/pizza/building' className={({ isActive })=> (
					isActive ? 'head-link head-link_active' : 'head-link'
				)}>
					Build your pizza
				</NavLink>
				<NavLink to='/pizza/ingredients' className={({ isActive })=> (
					isActive ? 'head-link head-link_active' : 'head-link'
				)}>
					Ingredients
				</NavLink>
			</header>

			<Outlet/>
		</div>
	)
}