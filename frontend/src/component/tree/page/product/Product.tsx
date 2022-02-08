import _ from 'lodash';
import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { TReducers } from '../../../../service';
import { URL_ADDRESSES } from '../../../../service/Common/constant';
import { fetchProductByID } from '../../../../service/pages/product/dataManagment/reducer';
import { ImageAsComponent } from '../../atom';
import { Vega } from '../../template';
import './style.css';

const Product: React.FC = () => {
	const dispatch = useDispatch();
	const { id } = useParams();
	const { state }: any = useLocation();
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

	// // const previousID = useMemo(() => id, [id]);
	// if (id) dispatch(fetchProductByID(id));
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
	if (productSelected.product_id == id) {
		const numberOfPics = productSelected.numberOfPics;
		if (numberOfPics) {
			for (let index = 0; index < numberOfPics; index++) {
				vegaData.sliderVariant2.list.push(
					<ImageAsComponent
						key={1}
						data={{
							src: `${URL_ADDRESSES.fileManager.image.load(
								`product/${productSelected.type}/medium/${
									state.colorName ? state.colorName : productSelected.colorName
								}/${productSelected.name.replace(
									/\s/g,
									'',
								)}/${productSelected.name.replace(/\s/g, '')}_${index + 1}`,
							)}`,
							alt: productSelected.name,
						}}
					/>,
				);
			}
			vegaData.sliderVariant2.display = true;
		}
		vegaData.selectSize.sizes = productSelected.size;
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
			{vegaData.sliderVariant2.list &&
				vegaData.sliderVariant2.list.length > 0 && <Vega data={vegaData} />}
		</div>
	);
};
export default Product;
