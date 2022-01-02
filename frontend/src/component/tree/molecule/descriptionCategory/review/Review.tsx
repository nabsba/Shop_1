import React from 'react';
import { H3, Paragraph } from '../../../atom';
import { Stars } from '../..';
import './style.css';
import TReview from './type';

type Props = {
	data: TReview;
};

const Review: React.FC<Props> = ({ data: { title, list, text } }) => {
	return (
		<div className="review">
			<H3 title={title} />
			<Stars data={{ list }} />
			<Paragraph data={text} />
		</div>
	);
};
export default Review;
