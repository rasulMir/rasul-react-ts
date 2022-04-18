import React from 'react';
import { Link, Routes} from 'react-router-dom';
import BackButton from './BackButton';

interface Props {}

export default function Main({}: Props) {

	return (
		<div className="wrap">
			<BackButton/>
			<div className='wrapper'>
				<h3 className='title'>the politicians</h3>
				<div className='items_wrap'>
					<Link to='presidents' className='item'>
						presidents
						<i className="fa fa-arrow-right" aria-hidden="true"></i>
					</Link>
				</div>
			</div>
		</div>
	)
}