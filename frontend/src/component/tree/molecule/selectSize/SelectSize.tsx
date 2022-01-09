import React from 'react';
import { ButtonOriginal } from '..';
import { H3 } from '../../atom';
import './style.css';
import TSelectSize from './type';

type Props = {
	data: TSelectSize;
};
const sizes = [7, 8, 9, 10, 11, 12, 13];
const title = 'select size';
const SelectSize: React.FC<Props> = ({ data }) => {
	return (
		<div className="select_size flex_column">
			<H3 title={title} />
			<div className="flex_row_wrap_center">
				{sizes.map((size) => (
					<ButtonOriginal key={size} data={size} />
				))}
			</div>
		</div>
	);
};
export default SelectSize;
