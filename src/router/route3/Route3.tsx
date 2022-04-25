import { Breadcrumbs, breadcrumbsClasses, Grid } from '@mui/material'
import React from 'react'
import { Outlet, useLocation, Link } from 'react-router-dom'
import Sidebar from './Sidebar'

interface Props {}

export default function Route3({}: Props) {

	let location = useLocation();

	const breadCrumbsLinks = () => {
		let filtered = location.pathname.split('/');
		return filtered && filtered.map((url, i) => 
			{
				if (i === 0) { return <Link to='/' key={url}>Home</Link> }
				else if (i === 1) { return <Link to={url} key={url}>{ url }</Link> }
				else { return <Link to={filtered[i - 1] + '/' + url} key={url}>{ url }</Link> }
			}
	}

	return (
		<Grid
			sx={{ height : '100vh' }}
			container
			spacing={2}
			alignItems="stretch">
			<Grid item xs={12}>
				<Breadcrumbs  separator="›" aria-label="breadcrumb" sx={{ padding : '10px', textTransform : 'capitalize' }}>
					{ breadCrumbsLinks() }
				</Breadcrumbs>
			</Grid>
			<Grid item xs={4}>
				<Sidebar/>
			</Grid>
			<Grid item xs={8}>
				<Outlet/>
			</Grid>
		</Grid>
	)
}