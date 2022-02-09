import React from 'react';
import { useDispatch } from 'react-redux';
import { CURRENCY } from '../../../../../service';
import { URL_ADDRESSES } from '../../../../../service/Common/constant';
import {
	removeProductFromTheBag,
	updatePropretyOfProduct,
} from '../../../../../service/pages/bag/dataManagment/reducer';
import { TProductDetails } from '../../../../../service/pages/Common/type';
import { Span } from '../../../atom';
import { ArticleVariantBag } from '../../../molecule';
import './style.css';
import TArticleGroupBag from './type';

type Props = {
	data: TArticleGroupBag;
};

const ArticleGroupBag: React.FC<Props> = ({
	data: { products, totalPriceOfTheBag, labels },
}) => {
	const dispatch = useDispatch();
	const getSelectValueAndLabel = (
		label: string,
		value: string | number,
		id?: string | number,
	) => {
		dispatch(
			updatePropretyOfProduct({
				id: Number(id),
				proprety: label.toLowerCase(),
				value: value,
			}),
		);
	};
	const removeProductFromBag = (id: number) => {
		dispatch(removeProductFromTheBag(id));
	};
	return (
		<div className="article_group_bag">
			{products.map((product: TProductDetails, index: number) => (
				<div key={index}>
					<div className="sub_article_group_bag_part_1">
						<ArticleVariantBag
							data={{
								selectOriginal: [
									{
										menus: product.size,
										label: labels.size,
										functionToCall: getSelectValueAndLabel,
										id: product.product_id,
									},
									{
										menus: [1, 2, 3, 4, 5],
										label: labels.quantity,
										functionToCall: getSelectValueAndLabel,
										id: product.product_id,
									},
								],
								list: [
									`${labels.type}: ${product.type}`,
									`${labels.color}: ${product.colorName}`,
									`${labels.size}: ${product.sizeWished.toString()}`,
								],
								imageAsComponent: {
									src: `${URL_ADDRESSES.fileManager.image.load(
										`product/${product.type}/medium/${
											product.colorName
										}/${product.name.replace(/\s/g, '')}/${product.name.replace(
											/\s/g,
											'',
										)}_1`,
									)}`,
									alt: product.name,
								},
								functionToCall: removeProductFromBag,
							}}
						/>
					</div>
					<div className="sub_article_group_bag_part_2">
						<Span data={labels.price} />
						<Span
							data={
								product.price *
									(product.quantityWished ? product.quantityWished : 1) +
								CURRENCY.UK
							}
						/>
					</div>
				</div>
			))}
			<div className="sub_article_group_bag_part_3">
				{totalPriceOfTheBag ? (
					<>
						<Span data={labels.totalPrice} />
						<Span data={totalPriceOfTheBag} />
						{labels.devise}
					</>
				) : (
					<Span data={labels.emptyBag} />
				)}
			</div>
		</div>
	);
};
export default ArticleGroupBag;
