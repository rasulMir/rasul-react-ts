import React from 'react'

interface Props {
	name : string,
	price : number,
	amount : number,
	increment : () => void,
	decrement : () => void,
}

export default function AddProd({ name, price, amount, increment, decrement}: Props) {
	return (
		<div className="add-products">
			<div className="left">
				<div className="name">{ name }</div>
				<div className="prod-price">{ price }$</div>
			</div>
			<div className="right">
				<button
					className='add-btn add-btn_red'
					onClick={decrement}>
					-
				</button>
				<div className="amount">{amount}</div>
				<button
					className='add-btn add-btn_green'
					onClick={increment}>
					+
				</button>
			</div>
		</div>
	)
}