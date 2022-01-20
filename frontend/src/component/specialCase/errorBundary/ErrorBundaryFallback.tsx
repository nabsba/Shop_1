import React from 'react';
import { ADMINISTRATION } from '../../../Common/constant';
import { Span } from '../../tree/atom';
import NavLink from '../../tree/atom/link/NavLink';
import './style.css';
import TErrorBundaryFallBack from './type';

const ErrorBoundaryFallback: React.FC<TErrorBundaryFallBack> = ({
	type,
}: {
	type: string;
	code: number;
}) => {
	return (
		<div id="error-bundary">
			<h1>
				A {type} should have been displayed but we are we are encountering some
				issues...
			</h1>
			<p>
				In case if the issue is not corrected within 24 hours, please send us a
				message to
				<span>
					<NavLink data={{ text: 'email', href: ADMINISTRATION.EMAIL }} />
				</span>
				including the code &apos;{type}&apos; as reference.
			</p>
			<Span data={'Thank you'} />
		</div>
	);
};

export default ErrorBoundaryFallback;
