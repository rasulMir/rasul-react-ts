import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFoundPage from './route2/NotFoundPage';
import Nav from './Nav';
import Router1 from './router1/Router1';
import Route2 from './route2/Route2';
import Register from './route2/Register';
import Login from './route2/Login';
import Write from './route2/Write';

interface Props {}

export default function RoutesComp({}: Props) {
	return (
		<Routes>
			<Route path='/' element={<Nav/>}/>
			
			<Route path='route1' element={<Router1/>}/>
			<Route path='route1/page1' element={<Router1/>}/>
			<Route path='route1/page2' element={<Router1/>}/>
			<Route path='route1/page3' element={<Router1/>}/>

			<Route path='route2' element={<Route2/>}>
				<Route index element={ <Register/>}/>
				<Route path='login' element={<Login/>}/>
				<Route path='story' element={<Write/>}/>
				<Route path='*' element={<NotFoundPage/>} />
			</Route>


		</Routes>
	)
}