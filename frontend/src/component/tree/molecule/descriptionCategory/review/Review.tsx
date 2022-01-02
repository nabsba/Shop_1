import React from 'react';
import { H3, Paragraph, Span } from '../../../atom';
import { Stars } from '../..';
import './style.css';
import '../style.css';
import TReview from './type';

type Props = {
	data: TReview;
};

const Review: React.FC<Props> = ({ data: { title, list, text } }) => {
	return (
		<div className="review">
			<div className="description_category_bottom">
				<div className="description_category_bottom_title">
					<Span data={title} />
					<Stars data={{ list }} />
				</div>
				<Paragraph data={text} />
			</div>
		</div>
	);
};
export default Review;
