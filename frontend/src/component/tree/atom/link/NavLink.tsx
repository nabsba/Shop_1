import React from 'react';
import { NavLink } from 'react-router-dom';
import { TNavLink } from './type';
import './navLink.css';

type TProps = {
	data: TNavLink;
};

const NavLinkAsComponent: React.FC<TProps> = ({
	data: { href, text, asComponent },
}) => {
	return (
		<NavLink to={href}>
			{asComponent ? (
				asComponent
			) : (
				<div className="nav_link_as_component"> {text}</div>
			)}
		</NavLink>
	);
};

export default NavLinkAsComponent;
