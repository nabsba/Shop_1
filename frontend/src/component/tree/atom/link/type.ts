import { ReactElement } from 'react';
export type TNavLink = {
	text: string;
	href: string;
	state?: Record<string, unknown>;
	asComponent?: ReactElement;
};
