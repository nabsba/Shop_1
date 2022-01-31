import React from 'react';
import getIcon from '../../../../factory/Icon';
import { H2, Span } from '../../../atom';
import { useStyles } from '../../../page/home/Home';
import './style.css';
import THeaderProduct from './type';

type Props = {
	data: THeaderProduct;
};

const HeaderProduct: React.FC<Props> = ({
	data: { h2, list, doWeDisplayHideNotice, functionToCall },
}) => {
	const FilterIcon = getIcon('Filter');
	const classes = useStyles();

	return (
		<div className="header_product">
			<div className="sub_header_product_top flex_row_between_align_center">
				<H2 title={h2} />
				<div
					onClick={() => {
						if (functionToCall) {
							functionToCall();
						}
					}}
					className={`${classes.iconNeutral} header_product_icons flex_row_wrap_align_center`}
				>
					<Span data={doWeDisplayHideNotice ? 'Hide filter' : 'Show filter'} />
					{FilterIcon}
				</div>
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
