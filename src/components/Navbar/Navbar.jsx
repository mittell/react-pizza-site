import React from 'react';
import { Bars, Nav, NavIcon, NavLink } from './NavbarElements';

function NavBar() {
	return (
		<>
			<Nav>
				<NavLink to='/'>Pizza</NavLink>
				<NavIcon>
					<p>Menu</p>
					<Bars />
				</NavIcon>
			</Nav>
		</>
	);
}

export default NavBar;
