import React from 'react'
import UseEffect from './UseEffect'
import Useeffect2 from './Useeffect2'

interface Props {}

export default function Hooks({}: Props) {
	return (
		<div className='wrap'>
			<UseEffect/>
			<hr />
			<Useeffect2/>
		</div>
	)
}