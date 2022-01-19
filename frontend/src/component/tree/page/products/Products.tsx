import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import URL_ADDRESSES from '../../../../bridge/url';
import {
	CURRENCY,
	fetchProductsFiltered,
	TReducers,
} from '../../../../service';
import { TProductDetails } from '../../../../service/pages/Common/type';

import { Cassiopeia } from '../../template';
import './style.css';

const Products: React.FC = () => {
	const dispatch = useDispatch();
	const { type, gender } = useParams();
	const divRef = React.useRef<HTMLDivElement>(null);
	const [articleGroupOriginalAfterMatchingColor, setArticleGroupOriginal] =
		useState<any[]>([]);

	const {
		dataProducts: {
			products,
			totalRows,
			productsDataPage: {
				navigationHeader,
				footer,
				headerProduct,
				articleGroupOriginal,
				filteringCategories,
			},
			productsFiltered,
		},
	} = useSelector((state: TReducers) => state);
	useEffect(() => {
		if (type && gender)
			dispatch(
				fetchProductsFiltered({
					preference: productsFiltered.filteringCategories,
					type,
					gender,
					isFetchDueToScroll: false
				}),
			);
	}, [dispatch, gender, productsFiltered.filteringCategories, type]);
	useEffect(() => {
		if (products && products.length > 0) {
			const newArray: any[] = [];
			products.map((product: TProductDetails) => {
				newArray.push({
					imageAsComponent: {
						src: `${URL_ADDRESSES.fileManager.image.load(
							`product/shoes/medium/${product.colorName}/${product.name.replace(
								/\s/g,
								'',
							)}/${product.name.replace(/\s/g, '')}_1`,
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
		} else {
			setArticleGroupOriginal([]);
		}
	}, [articleGroupOriginal, products]);
	const handleScroll = (): void => {
		if (divRef.current && totalRows !== products.length) {
			const bodyPosition = divRef.current?.getBoundingClientRect().top;
			const doWeGetNewPage = bodyPosition < 750;
			if (doWeGetNewPage && products && products.length > 0) {
				const length = products.length;
				const lastArrayId = products[length - 1].product_id;
				dispatch(
					fetchProductsFiltered({
						preference: productsFiltered.filteringCategories,
						type,
						gender,
						pagination: lastArrayId,
						isFetchDueToScroll: true
					}),
				);
			}
		}
	};
	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return (): void => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	const cassiopeiraData = {
		navigationHeader,
		footer,
		headerProduct,
		articleGroupOriginal: {
			list: articleGroupOriginal.list,
			display: articleGroupOriginal.display,
			pending: {
				productsBeingFiltered: productsFiltered.pending,
			},
		},
		filteringCategories,
	};
	cassiopeiraData.articleGroupOriginal.list =
		articleGroupOriginalAfterMatchingColor;
	cassiopeiraData.articleGroupOriginal.display =
		articleGroupOriginalAfterMatchingColor &&
		articleGroupOriginalAfterMatchingColor.length > 0;

	return (
		<div id="products">
			<Cassiopeia data={cassiopeiraData} />
			<div ref={divRef}> </div>
		</div>
	);
};
export default Products;
