import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';

interface Props {}

const Nav = (props: Props) => {
	return (
		<div className="wrap">
			<ul className='top-nav'>
				<li>
					<NavLink to='/' className={({isActive}) => (
						isActive ? 'active item-nav' : 'item-nav'
					)}>
						Main
					</NavLink>
				</li>
				<li>
					<NavLink to='router1' className={({isActive}) => (
						isActive ? 'active item-nav' : 'item-nav'
					)}>
						Route1
					</NavLink>
				</li>
			</ul>
			<Outlet/>
		</div>
	)
}

export default Nav;