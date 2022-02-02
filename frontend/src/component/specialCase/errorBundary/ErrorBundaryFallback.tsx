import React from 'react';
import { ADMINISTRATION } from '../../../service/Common/constant';
import { H3, Paragraph, Span } from '../../tree/atom';
import NavLink from '../../tree/atom/link/NavLink';
import './style.css';
import TErrorBundaryFallBack from './type';

const ErrorBoundaryFallback: React.FC<TErrorBundaryFallBack> = ({
	type,
	code,
}: {
	type: string;
	code: number;
}) => {
	return (
		<div id="error-bundary">
			<H3
				title={`${type} should have been displayed but we are encountering some
				issues...`}
			/>
			<Paragraph
				data={
					'In case if the issue is not corrected within 24 hours, please send us a message to'
				}
			/>
			<NavLink data={{ text: 'email', href: ADMINISTRATION.EMAIL }} />
			<Paragraph data={`including the code: "${code}" as reference.`} />
			<Span data={'Thank you'} />
		</div>
	);
};

export default ErrorBoundaryFallback;
//				including the code &apos;{type}&apos; as reference.
