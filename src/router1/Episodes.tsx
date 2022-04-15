import React from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import Main from './Main';

interface Props {}

export default function Simpsons({}: Props) {

	const episodes: string[] = [
		'homer',
		'homer2',
		'homer3',
		'homer4',
		'homer5',
		'homer6',
		'homer7',
	];

	let back : string = '<- back';
	return (
		<div>
			episodes
		</div>
	)
}