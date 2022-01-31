import React, { useEffect } from 'react';
import { TReducers } from '../../../../service';
import { useDispatch, useSelector } from 'react-redux';
import './style.css';
import { Achernar } from '../../template';
import _ from 'lodash';
import { addNewproductToTheBag } from '../../../../service/pages/bag/dataManagment/reducer';
import { ImageAsComponent } from '../../atom';
import URL_ADDRESSES from '../../../../bridge/url';

const Bag: React.FC = () => {
	const dispatch = useDispatch();
	const {
		dataProduct: {
			data: { productSelected },
		},
		dataBag: {
			bag: {
				navigationHeader,
				footer,
				articleGroupBagData,
				sliderVariant1Data,
			},
			products,
			totalPriceOfTheBag,
		},
	} = useSelector((state: TReducers) => state);

	useEffect(() => {
		if (productSelected.product_id) {
			dispatch(addNewproductToTheBag(productSelected));
		}
	}, [dispatch, productSelected]);

	const achernarData = {
		navigationHeader,
		footer,
		articleGroupBag: _.cloneDeep(articleGroupBagData),
		sliderVariant1: _.cloneDeep(sliderVariant1Data),
	};

	const array: React.ReactNode[] = [];
	achernarData.sliderVariant1.list.map((slide: { src: string; alt: string }) =>
		array.push(
			<ImageAsComponent
				key={2}
				data={{
					src: `${URL_ADDRESSES.fileManager.image.load(slide.src)}`,
					alt: slide.alt,
				}}
			/>,
		),
	);
	achernarData.sliderVariant1.list = array;
	achernarData.articleGroupBag.display = true;
	achernarData.articleGroupBag.products = products;
	achernarData.articleGroupBag.totalPriceOfTheBag = totalPriceOfTheBag;

	return (
		<div>
			<Achernar data={achernarData} />
		</div>
	);
};
export default Bag;
