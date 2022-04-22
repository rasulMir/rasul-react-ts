import React, { SyntheticEvent, useState } from 'react';
import { Container, Box, ButtonGroup, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

interface Props {}

export default function Router1({}: Props) {
	let [ pages, setPages ] = useState([
		'Page1', 'Page2', 'Page3'
	]);
	const navigate = useNavigate();

	const buttons = pages.map( page => (
		<Button 
			key={page} 
			onClick={() => navigate('/route1/' + page.toLocaleLowerCase())}>
			{ page }
		</Button>
	));


	return (
		<Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
			<Box
					mt={5}
					mb={5}>
				<Button
					variant='outlined'
					onClick={() => navigate(`/`)}>
					Home
				</Button>
				
			</Box>
			<ButtonGroup
				color='error'
        orientation="vertical"
        aria-label="vertical outlined button group"
      >
        { buttons }
      </ButtonGroup>
		</Box>
	)
}