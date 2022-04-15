import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './Nav';
import './index.css';
import Presidents from './router1/Presidents';
import AboutPresident from './router1/AboutPresident';
import Main from './router1/Main';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
			<Routes>
				<Route path='/' element={<Nav/>}>
					<Route path='router1' element={<Main/>}/>
					<Route path='router1/presidents' element={<Presidents/>}/>
					<Route path='router1/presidents/:id' element={<AboutPresident/>}/>
				</Route>
			</Routes>
		</BrowserRouter>
  </React.StrictMode>
);
