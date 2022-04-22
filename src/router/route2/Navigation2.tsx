import React from 'react';
import { Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

interface Props {}

export default function Navigation2({}: Props) {



	return (
		<Box sx={{
			display : 'flex',
			justifyContent : 'space-around',
			alignItems : 'center',
			flex: '0 0 50%'
		}}>
			<Button variant="contained" color='success'>
				<Link to='/route2'>
					Register
				</Link>
			</Button>

			<Button variant="contained" color='success'>
				<Link to='login'>
					Login
				</Link>
			</Button>

			<Button variant="contained" color='success'>
				<Link to='story'>
					Write a story
				</Link>
			</Button>
		</Box>
	)
}