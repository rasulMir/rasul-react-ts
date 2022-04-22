import React from 'react';
import { Container, Typography, Button, AppBar, Box, Toolbar } from '@mui/material';
import Navigation2 from './Navigation2';

interface Props {}

export default function AppBarRoute({}: Props) {
	return (
		<AppBar position="static">
      <Container maxWidth="xl">
				<Toolbar>
					<Typography
							variant="h6"
							noWrap
							component="div"
							sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
						>
						LOGO
					</Typography>
					<Navigation2/>
				</Toolbar>
			</Container>
		</AppBar>
	)
}