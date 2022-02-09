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
			{list.map((item: any, index: number) => {
				if (item) {
					return <span key={index}> {StarsFill} </span>;
				} else {
					return <span key={index}> {StarsEmpty} </span>;
				}
			})}
		</div>
	);
};
export default Stars;
