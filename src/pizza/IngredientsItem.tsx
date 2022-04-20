import React from 'react'

interface Props {
	name : string,
	amount : number,
	img : any,
}

export default function IngredientsItem({ name, amount, img }: Props) {
	return (
		<div className="ingredients-item">
			<h2 className="pizza-title">
				{name}
			</h2>
			<img src={img} alt="item name" className='image'/>
			<h2 className="pizza-title">
				{amount}	
			</h2>	
		</div>
	)
}