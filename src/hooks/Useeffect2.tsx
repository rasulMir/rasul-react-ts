import React, { useState } from 'react'

interface Props {}

export default function Useeffect2({}: Props) {
	const luckyNum = ():number => Math.ceil(Math.random() * 99 - 1);
	let [name, setName] = useState('cool guy');
	let [count, setCount] = useState(0);
	let [luckyNumber, setLuckyNumber] = useState(luckyNum());

	const onclick = (): void => {
		setCount(count + 1);
		setName(name += 'y');
	}

	const onclick2 = (): void => setLuckyNumber(luckyNum());

	return (
		<div>
			<h2>hello {name}</h2>
			<h2>your lucky number is {luckyNumber}</h2>
			<h2>name has changed {count} times</h2>
			<button onClick={onclick}>change name</button>
			<button onClick={onclick2}>get your lucky number</button>
		</div>
	)
}