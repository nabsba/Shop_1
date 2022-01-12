import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import URL_ADDRESSES from '../../../../bridge/url';
import { TReducers } from '../../../../service';
import {
	fetchProductByID,
	updateProductSelected,
} from '../../../../service/pages/product/dataManagment/reducer';
import { ImageAsComponent } from '../../atom';
import { Vega } from '../../template';
import './style.css';

const Product: React.FC = () => {
	const dispatch = useDispatch();
	const {
		dataProduct: {
			product: {
				navigationHeader,
				footer,
				sliderVariant2Data,
				butttonVariant1,
				descriptionProductData,
				pub,
				selectSizeData,
			},
			data: { productSelected },
		},
	} = useSelector((state: TReducers) => state);
	const { id } = useParams();

	useEffect(() => {
		if (id) dispatch(fetchProductByID(id));
	}, [dispatch, id]);

	const vegaData = {
		navigationHeader,
		footer,
		sliderVariant2: _.cloneDeep(sliderVariant2Data),
		butttonVariant1,
		descriptionProduct: _.cloneDeep(descriptionProductData),
		selectSize: _.cloneDeep(selectSizeData),
		pub,
	};

	if (productSelected && productSelected.type) {
		const numberOfPics = productSelected.numberOfPics;
		if (numberOfPics) {
			for (let index = 0; index < numberOfPics; index++) {
				vegaData.sliderVariant2.list.push(
					<ImageAsComponent
						key={1}
						data={{
							src: `${URL_ADDRESSES.fileManager.image.load(
								`product/${productSelected.type}/medium/${
									productSelected.colorName
								}/${productSelected.name.replace(
									/\s/g,
									'',
								)}/${productSelected.name.replace(/\s/g, '')}_${index + 1}.png`,
							)}`,
							alt: productSelected.name,
						}}
					/>,
				);
			}
			vegaData.sliderVariant2.display = true;
		}
		vegaData.selectSize.sizes = productSelected.size.split(',').map(Number);
		vegaData.descriptionProduct.descriptionData.description.title = `${productSelected.name}`;
		vegaData.descriptionProduct.descriptionData.description.text = `${productSelected.description}`;
		vegaData.descriptionProduct.descriptionData.detail.title = 'Detail';
		vegaData.descriptionProduct.descriptionData.detail.list = [
			`Name of the product: ${productSelected.name}`,
			`Color of the product: ${productSelected.colorName}`,
		];
	}

	return (
		<div id="product">
			<Vega data={vegaData} />
		</div>
	);
};
export default Product;
