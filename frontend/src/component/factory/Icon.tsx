import React, { ReactElement } from 'react';
import {
	Twitter,
	Bag,
	Facebook,
	Filter,
	Close,
	Medical,
	Arrow,
	Account,
	Stars,
	Heart,
	Location,
	Burger,
	IconWrapper,
} from '../tree/atom/icon';

// https://react-icons.github.io/react-icons/icons?name=fa

const getIcon = (indice: string): ReactElement => {
	switch (indice) {
		case 'Twitter':
			return <IconWrapper Icon={<Twitter />} />;
		case 'Bag':
			return <IconWrapper Icon={<Bag />} />;
		case 'Facebook':
			return <IconWrapper Icon={<Facebook />} />;
		case 'Filter':
			return <Filter />;
		case 'Close':
			return <Close />;
		case 'Medical':
			return <Medical />;
		case 'Arrow':
			return <Arrow />;
		case 'Account':
			return <Account />;
		case 'Stars':
			return <Stars />;
		case 'Heart':
			return <Heart />;
		case 'Location':
			return <Location />;
		case 'Burger':
			return <Burger />;
		default:
			return <span> {indice}</span>;
	}
};
export default getIcon;
