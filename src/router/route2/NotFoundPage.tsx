import { Box, Typography } from '@mui/material';
import React from 'react';
import AppBarRoute from './AppBar';

interface Props {}

export default function NotFoundPage({}: Props) {
	return (
		<Box sx={{
			padding : '20px 0',
		}} >
			<Typography
				align='center'
				variant="h6"
				noWrap
				component="div"
				>
				ERROR 404 Not Found Page
			</Typography>
		</Box>
	)
}