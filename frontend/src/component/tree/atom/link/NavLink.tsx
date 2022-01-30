import React from 'react';
import { NavLink } from 'react-router-dom';
import { TNavLink } from './type';
import './navLink.css';
import { useStyles } from '../../page/home/Home';

type TProps = {
	data: TNavLink;
};

const NavLinkAsComponent: React.FC<TProps> = ({
	data: { href, text, asComponent, state },
}) => {
	const classes = useStyles();
	return (
		<NavLink className={classes.textColorLink} to={href} state={state}>
			{asComponent ? (
				asComponent
			) : (
				<div className="nav_link_as_component"> {text}</div>
			)}
		</NavLink>
	);
};

export default NavLinkAsComponent;
