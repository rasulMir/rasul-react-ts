import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Nav from './Nav';
import Presidents from './router1/Presidents';
import AboutPresident from './router1/AboutPresident';
import Main from './router1/Main';
import NotFoundPage from './NotFoundPage';
import Building from './pizza/Building';

import './index.css';
import Hooks from './hooks/Hooks';
import PizzaMain from './pizza/PizzaMain';
import Ingredients from './pizza/Ingredients';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
			<Routes>
				<Route path='/' element={<Nav/>}/>
				<Route path='/router1' element={<Main/>}/>
				<Route path='/router1/presidents' element={<Presidents/>}/>
				<Route path='/router1/presidents/:id' element={<AboutPresident/>}/>

				<Route path='hooks' element={<Hooks/>}/>

				<Route path='/pizza' element={<PizzaMain/>}>
					<Route path='building' element={<Building/>}/>
					<Route path='ingredients' element={<Ingredients/>}/>
				</Route>

				<Route path='*' element={<NotFoundPage/>} />
			</Routes>
		</BrowserRouter>
  </React.StrictMode>
);
