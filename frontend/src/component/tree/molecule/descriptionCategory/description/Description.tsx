import React from 'react';
import { H3, Paragraph } from '../../../atom';
import './style.css';
import TDescription from './type';

type Props = {
	data: TDescription;
};

const Description: React.FC<Props> = ({ data: { title, text } }) => {
	return (
		<div>
			<H3 title={title} />
			<Paragraph data={text} />
		</div>
	);
};
export default Description;
