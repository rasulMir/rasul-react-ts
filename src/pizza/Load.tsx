import React from 'react'
import { useNavigate } from 'react-router-dom'

interface Props {}

export default function Load({}: Props) {

	let navigate = useNavigate();

	return (
		<div className='check-wrap'>
			<div className="check-card">
				<span
					className='back'
					onClick={()=>navigate(-1)}
				>
					X
				</span>
				<h2>save your confirmation number</h2>
				<div className="bttm">
					<input type="text" className='inp mr'/>
					<button className='btn'
						onClick={()=>navigate(-1)}>
						submit
					</button>
				</div>
			</div>
		</div>
	)
}