import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BackButton from './BackButton';
import { ProdType } from './Building';

interface Props {};

type TProdType = ProdType;

export default function Check({}: Props) {
	let [checkout, setCheckout] = useState(
										JSON.parse(`${localStorage.getItem('checkout')}`));

	const ingredientsList = () => {
		if (checkout) {
			return checkout.map((item:TProdType) => (
				<li key={item.id}>
					{item.name} {item.amount}
				</li>
			));
		}
		else return <li>You did not add to cart</li>;
	}

	const totalPrice = () => {
		if (Array.isArray(checkout)) {
			let total = checkout.reduce((acc, prod: ProdType) => (acc + (prod.amount * prod.price)), 0);
			return total.toFixed(2);
		}
		else return 0;
	}

	return (
		<div className='check-wrap'>
			<div className="check-card">
				<h2 className="check-title">your order</h2>
				<p className="txt">The pizza has the following ingredients</p>
				<ul className="ingredients-list">
					{ingredientsList()}
				</ul>
				<h2 className="check-title">total price {totalPrice()}$</h2>
				<p className="txt">Continue to checkout?</p>
				<div className="check-btns">
					<BackButton>Cancel</BackButton>
					<Link to='/pizza/ingredients' className='check-btn btn'>Cotinue</Link>
				</div>
			</div>
		</div>
	)
}