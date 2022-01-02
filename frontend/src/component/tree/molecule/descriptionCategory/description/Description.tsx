import React from 'react';
import { H3, Paragraph, Span } from '../../../atom';
import './style.css';
import '../style.css';
import TDescription from './type';

type Props = {
	data: TDescription;
};

const Description: React.FC<Props> = ({ data: { title, text } }) => {
	return (
		<div className="description_category_description description_category_bottom">
			<div className="description_category_bottom_title">
				<Span data={title} />
			</div>
			<Paragraph data={text} />
		</div>
	);
};
export default Description;
