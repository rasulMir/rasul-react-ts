import React from 'react';
import Button from '@mui/material/Button';
import { Container, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

interface Props {}

export default function Nav({}: Props) {
	return (
		<Container maxWidth='sm'>
			<Stack direction="row" spacing={2} mt={2} mb={2}>
				<Button variant="outlined" color="success">
					<Link to='route1'>
						Router1
					</Link>
				</Button>
				<Button variant="outlined" color="success">
					<Link to='route2'>
						Router2
					</Link>
				</Button>
				<Button variant="outlined" color="success">
					<Link to='12'>
						Router3
					</Link>
				</Button>
			</Stack>
		</Container>
	);
}