import React from 'react';
import { Span } from '../../../atom';
import './style.css';
import '../style.css';
import TDetail from './type';

type Props = {
	data: TDetail;
};

const Detail: React.FC<Props> = ({ data: { title, list } }) => {
	return (
		<div className="detail description_category_bottom">
			<div className="description_category_bottom_title">
				<Span data={title} />
			</div>
			<ul>
				{list.map((menu, index) => (
					<li key={`${menu}${index}`}>
						<Span data={menu} />
					</li>
				))}
			</ul>
		</div>
	);
};
export default Detail;
