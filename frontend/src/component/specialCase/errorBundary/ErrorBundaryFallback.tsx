import React from 'react';
import { ADMINISTRATION } from '../../../service/Common/constant';
import { H3, Paragraph, Span } from '../../tree/atom';
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
				title={`${type} should have been displayed but we are facing some
				issues...`}
			/>
			<Paragraph
				data={`In case if the issue is not corrected within 24 hours, please send us an email at ${ADMINISTRATION.EMAIL}`}
			/>
			<Paragraph data={`Including the code: "${code}" as reference.`} />

			<Span data={'Thank you'} />
		</div>
	);
};

export default ErrorBoundaryFallback;
//				including the code &apos;{type}&apos; as reference.
