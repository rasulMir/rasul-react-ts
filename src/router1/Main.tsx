import React from 'react';
import { Link } from 'react-router-dom';

interface Props {}

export default function Main({}: Props) {
	return (
		<div className='wrapper'>
			<h3 className='title'>the politicians</h3>
			<div className='items_wrap'>
				<Link to='presidents' className='item'>
					presidents
					<i className="fa fa-arrow-right" aria-hidden="true"></i>
				</Link>
			</div>
		</div>
	)
}