import React, { useEffect, useState } from 'react'
import BackButton from '../router1/BackButton';

interface Props {}

export default function UseEffect({}: Props) {

	let [ count, setCount ] = useState(0);
	useEffect(() => localStorage.setItem('count', JSON.stringify(count)), [ count ]);

	const onclick = (e: React.SyntheticEvent<HTMLButtonElement>): void => {
		const countTo: number = parseInt(e.currentTarget.name, 10);
		const storageNum: any = localStorage.getItem('count');
		const num: number = parseInt(storageNum, 10) + countTo;
		
		if (num <= 0 || countTo === 0) {
			setCount(count = 0);
			return;
		}
		else setCount(num);
	}

	return (
		<>
			<BackButton/>
			<div className='useef-wrap'>
				<h1 className="u-e-title">
					{ count }
				</h1>
				<button onClick={onclick} className="btn" name='-1'>-1</button>
				<button onClick={onclick} className="btn" name='1'>+1</button>
				<button onClick={onclick} className="btn reset" name='0'>reset</button>
			</div>
		</>
	)
}