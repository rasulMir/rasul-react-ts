import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Charachters from './Charachters';
import Episodes from './Episodes';
import './index.css';
import Main from './Main';

export default function Router1() {
	return (
		<div className='wrap'>
			<Routes>
				<Route path='/' element={<Main/>}/>
				<Route path='charachters' element={<Charachters/>}/>
				<Route path='episodes' element={<Episodes/>}/>
			</Routes>
		</div>
	)
}