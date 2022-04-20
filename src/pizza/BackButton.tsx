import React from 'react'
import { useNavigate } from 'react-router-dom'

interface Props {};

export default function BackButton({}: Props) {
	let navigate = useNavigate();
	const onclick = () => {
		navigate(-1);
	}
	return (
		<button onClick={onclick}  className='back'>
			<i className="fa fa-arrow-left" aria-hidden="true"></i>
			Back
		</button>
	)
}