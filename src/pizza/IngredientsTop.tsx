import React, { useState } from 'react';

import { ProdType } from './Building';
import IngredientsItem from './IngredientsItem';

interface Props {}

export default function IngredientsTop({}: Props) {
	let [ cart, setCart ] = useState(
		JSON.parse(`${localStorage.getItem('checkout')}`)
	);

	const items = () => {
		if (cart) {
			return cart.map( ( item: ProdType ) => (
				<IngredientsItem
					key={item.id}
					img={item.img}
					amount={item.amount}
					name={item.name}
					/>
			));
		}
		else return <h2 className="title">cart is empty</h2>
	}

	return (
		<div className="ingredients-top">
			<h2 className="pizza-title">Ingredients</h2>
			<div className="ingredients-content">
				{
					items()
				}
			</div>
		</div>
	)
}