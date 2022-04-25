import { Box } from '@mui/material'
import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { NavLink } from 'react-router-dom';

interface Props {}

export default function Sidebar({}: Props) {
	const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
	type actv = { isActive : boolean };
	const active = ({ isActive }:actv):string => isActive ? 'route3 route3_active' : 'route3';

  return (
    <List sx={{ width: '100%', maxWidth: '100%', height: '100%',bgcolor: 'blue', color : 'white' }}>
      <ListItem>
				<NavLink to='/route3/' className={active} >Home</NavLink>
			</ListItem>
      <ListItem>
				<NavLink to='users/' className={active} >Users</NavLink>
			</ListItem>
      <List sx={{ padding : '0 0 0 20px', listStyleType: 'disc' }}>
      	<ListItem>
					<NavLink to='users/vasya' className={active} >Vasya</NavLink>
				</ListItem>
      	<ListItem>
					<NavLink to='users/peter' className={active} >Peter</NavLink>
				</ListItem>
			</List>
    </List>
  );
}