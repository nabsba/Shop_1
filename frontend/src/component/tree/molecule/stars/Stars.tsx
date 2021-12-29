import React from 'react';
import getIcon from '../../../factory/Icon';
import './style.css';
import TStars from './type';

type Props = {
	data: TStars;
};

const Stars: React.FC<Props> = ({ data: { list } }) => {
	const StarsEmpty = getIcon('StarsEmpty');
	const StarsFill = getIcon('StarsFill');

	return (
		<div className="stars">
			{list.map((item) => {
				if (item) {
					return StarsFill;
				} else {
					return StarsEmpty;
				}
			})}
		</div>
	);
};
export default Stars;
