import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import URL_ADDRESSES from '../../../../bridge/url';
import {
	CURRENCY,
	fetchProductsByTypeAndGender,
	TReducers,
} from '../../../../service';
import { generateNewArrayWithMatchingColor } from '../../../../service/pages/Common/logic/function';
import { TNewObjectWithMatchingColor } from '../../../../service/pages/Common/type';
import { Cassiopeia } from '../../template';
import './style.css';

const Products: React.FC = () => {
	const dispatch = useDispatch();
	const [articleGroupOriginalAfterMatchingColor, setArticleGroupOriginal] =
		useState<any[]>([]);
	const { type, gender } = useParams();
	const {
		dataProducts: {
			data,
			products: {
				navigationHeader,
				footer,
				headerProduct,
				articleGroupOriginal,
			},
		},
		informationDataBaseStore,
	} = useSelector((state: TReducers) => state);
	useEffect(() => {
		if (type && gender)
			dispatch(fetchProductsByTypeAndGender({ type, gender }));
	}, [dispatch, gender, type]);

	useEffect(() => {
		if (
			informationDataBaseStore.color &&
			data.products &&
			data.products.length > 0
		) {
			const productsWithMatchingColor: TNewObjectWithMatchingColor[] =
				generateNewArrayWithMatchingColor(
					informationDataBaseStore.color,
					data.products,
				);
			const newArray: any[] = [];
			productsWithMatchingColor.map((product: TNewObjectWithMatchingColor) => {
				newArray.push({
					imageAsComponent: {
						src: `${URL_ADDRESSES.fileManager.image.load(
							`product/shoes/medium/${product.color}/${product.name.replace(
								/\s/g,
								'',
							)}/${product.name.replace(/\s/g, '')}_1.png`,
						)}`,
						alt: product.name,
					},
					information: {
						name: product.name,
						price: product.price + CURRENCY.UK,
					},
					link: {
						href: `${product.product_id}`,
						text: product.name,
					},
				});
			});
			setArticleGroupOriginal(newArray);
		}
	}, [data.products, informationDataBaseStore.color]);

	const cassiopeiraData = {
		navigationHeader,
		footer,
		headerProduct,
		articleGroupOriginal: {
			list: articleGroupOriginal.list,
			display: articleGroupOriginal.display,
		},
	};

	cassiopeiraData.articleGroupOriginal.list =
		articleGroupOriginalAfterMatchingColor;
	cassiopeiraData.articleGroupOriginal.display =
		articleGroupOriginalAfterMatchingColor &&
		articleGroupOriginalAfterMatchingColor.length > 0;

	return (
		<div id="products">
			<Cassiopeia data={cassiopeiraData} />
		</div>
	);
};
export default Products;
