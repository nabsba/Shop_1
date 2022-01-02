import React from 'react';
import { H3 } from '../../../atom';
import './style.css';
import TDetail from './type';

type Props = {
	data: TDetail;
};

const Detail: React.FC<Props> = ({ data: { title, list } }) => {
	return (
		<div className="detail">
			<H3 title={title} />
			<ul>
				{list.map((menu, index) => (
					<li key={`${menu}${index}`}>{menu}</li>
				))}
			</ul>
		</div>
	);
};
export default Detail;
