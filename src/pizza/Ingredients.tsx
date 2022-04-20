import React from 'react';
import {  } from 'react-router-dom';
import Checkout from './Checkout';
import IngredientsTop from './IngredientsTop';

interface Props {}

export default function Ingredients({}: Props) {

	return (
		<div className='container'>
			<div className="ingredients-wrap">
				<IngredientsTop/>
				<Checkout/>
			</div>
		</div>
	)
}