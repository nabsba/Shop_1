import React from 'react';
import getIcon from '../../../../factory/Icon';
import { H2 } from '../../../atom';
import './style.css';
import THeaderProduct from './type';

type Props = {
	data: THeaderProduct;
};

const HeaderProduct: React.FC<Props> = ({ data: { h2, list } }) => {
	const FilterIcon = getIcon('Filter');
	return (
		<div className="header_product">
			<div className="sub_header_product_top flex_row_between_align_center">
				<H2 title={h2} />
				{FilterIcon}
			</div>
			<div className="sub_header_product_bottom">
				<ul className="flex_row">
					{list.map((category) => (
						<li key={category}> {category}</li>
					))}
				</ul>
			</div>
		</div>
	);
};
export default HeaderProduct;
