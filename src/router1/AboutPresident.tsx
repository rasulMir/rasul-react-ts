import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import BackButton from './BackButton';

interface Props {}

export default function AboutPresident({}: Props) {
	interface Data {
    id: number,
    ordinal: number,
    name: string,
    yearsInOffice: string,
    vicePresidents: string[],
    photo: string
  }
	
	let [ president, setPresident] = useState({
		id: 0,
    ordinal: 0,
    name: '',
    yearsInOffice: '',
    vicePresidents: [],
    photo: ''
	});
	let { id } = useParams();

	useEffect(
		() => {
			const baseURL = `https://api.sampleapis.com/presidents/presidents/${id}`;
			fetch(baseURL)
				.then(resp => resp.json())
				.then(data => setPresident(data));
		},
		[]
	);

	return (
		<div className='wrapper'>
			<BackButton path='/presidents'/>
			<div className='items_wrap'>
				<div className="about_president-wrap">
					<img className='img' src={president.photo} alt={president.name} />
					<div className="right-side">
						<h3 className='txt'>{president.name}</h3>
						<div className="txt">{president.ordinal} President by Count</div>
						<div className="txt">{president.yearsInOffice}</div>
						<div className="vice-pres">
							Vice Presidents:
							<div>
								{president.vicePresidents.map(vice => <span key={vice} className='vice'>{vice}</span>)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}