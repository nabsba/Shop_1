import _ from 'lodash';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
	CURRENCY,
	fetchProductsFiltered,
	TReducers,
} from '../../../../service';
import { URL_ADDRESSES } from '../../../../service/Common/constant';
import { TProductDetails } from '../../../../service/pages/Common/type';
import { updateDisplayFilteringComponent } from '../../../../service/pages/products/dataManagment/reducer';
import { Cassiopeia } from '../../template';
import './style.css';

const Products: React.FC = () => {
	const dispatch = useDispatch();
	const { type, gender } = useParams();
	const {
		dataProducts: {
			products,
			totalRows,
			isUserHasScrolled,
			productsDataPage: {
				navigationHeader,
				footer,
				headerProduct,
				articleGroupOriginal,
				filterProduct,
				infosTemplate,
				paragraph,
			},
			productsFiltered,
		},
	} = useSelector((state: TReducers) => state);

	const doWeFetchProducts = type && gender && products && products.length === 0;
	const doWeNeedToLoadMoreProductsOnScroll =
		totalRows &&
		totalRows !== products.length &&
		isUserHasScrolled &&
		products &&
		products.length > 0;
	useEffect(() => {
		if (doWeFetchProducts)
			dispatch(
				fetchProductsFiltered({
					preference: productsFiltered.filteringCategories,
					type,
					gender,
					isFetchDueToScroll: false,
				}),
			);
	}, [
		dispatch,
		doWeFetchProducts,
		gender,
		productsFiltered.filteringCategories,
		type,
	]);

	const productsArticles: any[] = [];
	if (products && products.length > 0) {
		products.map((product: TProductDetails) => {
			productsArticles.push({
				imageAsComponent: {
					src: `${URL_ADDRESSES.fileManager.image.load(
						`product/${type}/medium/${product.colorName}/${product.name.replace(
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
					href: `/product/${type}/${gender}/${product.product_id}`,
					text: product.name,
					state: { colorName: product.colorName },
				},
			});
		});
	}

	useEffect(() => {
		if (doWeNeedToLoadMoreProductsOnScroll) {
			const length = products.length;
			const lastArrayId = products[length - 1].product_id;
			dispatch(
				fetchProductsFiltered({
					preference: productsFiltered.filteringCategories,
					type,
					gender,
					pagination: lastArrayId,
					isFetchDueToScroll: true,
				}),
			);
		}
	}, [
		dispatch,
		isUserHasScrolled,
		doWeNeedToLoadMoreProductsOnScroll,
		gender,
		products,
		productsFiltered.filteringCategories,
		totalRows,
		type,
	]);
	const cassiopeiraData = {
		navigationHeader,
		footer,
		headerProduct,
		articleGroupOriginal: {
			list: articleGroupOriginal.list,
			pending: productsFiltered.pending,
			isServerFaulty: productsFiltered.serverError,
			infosTemplate: articleGroupOriginal.infosTemplate,
		},
		filterProduct: _.cloneDeep(filterProduct),
		infosTemplate,
		paragraph,
	};
	cassiopeiraData.headerProduct = {
		...cassiopeiraData.headerProduct,
		functionToCall: () =>
			dispatch(
				updateDisplayFilteringComponent(
					!productsFiltered.doWedisplayFilteringComponent,
				),
			),
		doWedisplayFilteringComponent:
			productsFiltered.doWedisplayFilteringComponent,
	};
	cassiopeiraData.articleGroupOriginal.list = productsArticles;
	cassiopeiraData.filterProduct.functionToCall = () =>
		dispatch(
			updateDisplayFilteringComponent(
				!productsFiltered.doWedisplayFilteringComponent,
			),
		);
	cassiopeiraData.filterProduct.areProductsBeingFetched =
		productsFiltered.pending;
	return (
		<div id="products">
			<Cassiopeia data={cassiopeiraData} />
		</div>
	);
};
export default Products;
