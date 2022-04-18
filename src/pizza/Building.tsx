import React, { ReactElement, useMemo, useReducer } from 'react';
import AddProd from './AddProd';

import pepperoni from './img/pepperoni.jpg';
import swiss from './img/swiss-cheese.webp';
import feta from './img/feta.jpg';
import mozarella from './img/mozarella.jpg';
import spices from './img/spices.jpg';
import vegetables from './img/vegetables.jpg';
import coldCuts from './img/cold-cuts.jpg';

import reducer from './reducer';
import { decrement, increment } from './actions';

interface Props {}

export interface ProdType {
	id: string;
	name: string;
	price: number;
	amount: number;
	img: any;
}

export default function Building({}: Props) {
	
	const products = useMemo(() => {
		const randId = () => Math.random().toString(36).substr(3,11);

		return [
			{ id : randId(), name : 'Cold cuts', price : 3, amount: 0, img : coldCuts},
			{ id : randId(), name : 'pepperoni', price : 2.5, amount: 1, img : pepperoni},
			{ id : randId(), name : 'feta', price : 1.5, amount: 0, img : feta},
			{ id : randId(), name : 'mozarella', price : 1, amount: 0, img : mozarella},
			{ id : randId(), name : 'swiss cheese', price : 2, amount: 0, img : swiss},
			{ id : randId(), name : 'spices', price : .25, amount: 0, img : spices},
			{ id : randId(), name : 'vegetables', price : .75, amount: 0, img : vegetables},
		];
	}, []);

	let [ state, dispatch ] = useReducer(reducer, products);

	const getImgs = () => {
		if (Array.isArray(state)) {
			return state.map((prod : ProdType) => {
				if (prod.amount > 0) {
					return <img key={prod.id} src={prod.img} className='image' alt="product image" />
				}
				else return;
			});
		}
		else return <div>build your pizza</div>;
	}

	const totalPrice = () => {
		if (Array.isArray(state)) {
			let total = state.reduce((acc, prod: ProdType) => (acc + (prod.amount * prod.price)), 0);
			return total.toFixed(2);
		}
		else return 0;
	}

	const getAddProds = () => {
		if (Array.isArray(state)) {
			return state.map((prod: ProdType) => (
				<AddProd
					increment={()=>dispatch(increment(prod.id))}
					decrement={()=>dispatch(decrement(prod.id))}
					amount={prod.amount}
					key={prod.id}
					name={prod.name}
					price={prod.price}/>
			));
		}
		else return <div>build your pizza</div>;
	}

	return (
		<div className="container">
			<div className='content'>
				<div className="content-images">
					<div className="content-top">
						<h2 className='pizza-title'>Your pizza</h2>
					</div>
					{ getImgs() }
				</div>

				<div className="content-order">
					<div className="content-top">
						<h2 className="pizza-title title-opacity">
							your pizza
						</h2>
						<div className="price">{ totalPrice() }$</div>
						<button
							className='pizza-btn btn_golden'
							onClick={() => dispatch({type : 'reset'})}>
								reset pizza
						</button>
					</div>
					<div className="content-bttm">
						{ getAddProds() }
						<div className="total-price">
							<span>total</span>
							<span>{ totalPrice() }$</span>
						</div>
						<div className="saving-order">
							<button className="add-btn add-btn_green">save pizza</button>
							<button className="add-btn add-btn_blue">checkout</button>
						</div>
						<div className="saving-order">
							<button
								className="add-btn add-btn_black"
								>
								load pizza
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}