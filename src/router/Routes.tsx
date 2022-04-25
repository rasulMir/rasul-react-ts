import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFoundPage from './route2/NotFoundPage';
import Nav from './Nav';
import Router1 from './router1/Router1';
import Route2 from './route2/Route2';
import Register from './route2/Register';
import Login from './route2/Login';
import Write from './route2/Write';
import Route3 from './route3/Route3';
import Home from './route3/Home';
import Users from './route3/Users';
import Vasya from './route3/Vasya';
import Peter from './route3/Peter';

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

			<Route path='route3' element={<Route3/>}>
				<Route index  element={<Home/>}/>
				<Route path='users'  element={<Users/>}/>
				<Route path='users/vasya'  element={<Vasya/>}/>
				<Route path='users/peter'  element={<Peter/>}/>
			</Route>

		</Routes>
	)
}