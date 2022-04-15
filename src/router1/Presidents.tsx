import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import BackButton from './BackButton';

interface Props {}

export default function Presidents({}: Props) {

	let [ presidents, setPresidents] = useState([]);

	useEffect(
		() => {
			const baseURL = 'https://api.sampleapis.com/presidents/presidents';
			fetch(baseURL)
				.then(resp => resp.json())
				.then(data => setPresidents(data));
		},
		[]
	);

	const currUrl = useLocation();

	interface Data {
    id: number,
    ordinal: number,
    name: string,
    yearsInOffice: string,
    vicePresidents: string[],
    photo: string
  }
	
	const getPresidents = () => (
		presidents.map((president: Data) => (
			<Link to={`${currUrl.pathname}/${president.id}`} className='item' key={president.id}>
				{president.name}
				<i className="fa fa-arrow-right" aria-hidden="true"></i>
			</Link>
		))
	);

	return (
		<div className='wrapper'>
			<BackButton path='/'/>
			<h3 className='title'>Presidents</h3>
			<div className='items_wrap'>
				{ getPresidents() }
			</div>
		</div>
	)
}