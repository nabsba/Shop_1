import { useTheme } from '@mui/styles';
import React, { useState } from 'react';
import { Span } from '../../atom';
import { Description, Detail, Review } from '../../molecule';
import './style.css';
import TDescriptionProduct from './type';

type Props = {
	data: TDescriptionProduct;
};

const DescriptionProduct: React.FC<Props> = ({
	data: { menusDescription, descriptionData },
}) => {
	const [menuSelected, setMenuSelected] = useState<string>('description');

	const handleMenuSelected = (menu: string) => {
		setMenuSelected(menu);
	};
	const theme: any = useTheme();
	const getDescriptionBottom = (menuSelected: string) => {
		switch (menuSelected) {
			case 'description':
				return <Description data={descriptionData.description} />;
			case 'detail':
				return <Detail data={descriptionData.detail} />;
			case 'review':
				return descriptionData.review.map((rev) => (
					<Review key={rev.title} data={rev} />
				));
			default:
				return null;
		}
	};
	return (
		<div className="description_product">
			<div className="sub_description_product_top">
				<ul className="sub_description_product_top_menus_wrapper flex_row_between">
					{menusDescription.map((menu) => (
						<div
							className={
								menu === menuSelected ? 'description_product_effect' : ''
							}
							key={menu}
							onClick={() => handleMenuSelected(menu)}
							style={{
								borderBottom: `1px solid ${theme.palette.neutral.dark}`,
							}}
						>
							<li>
								<Span data={menu} />
							</li>
						</div>
					))}
				</ul>
			</div>

			<div className="sub_description_product_bottom">
				{getDescriptionBottom(menuSelected)}
			</div>
		</div>
	);
};
export default DescriptionProduct;
