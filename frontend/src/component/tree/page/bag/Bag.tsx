import React, { useEffect } from 'react';
import { TReducers } from '../../../../service';
import { useDispatch, useSelector } from 'react-redux';
import './style.css';
import { Achernar } from '../../template';
import _ from 'lodash';
import { addNewproductToTheBag } from '../../../../service/pages/bag/dataManagment/reducer';

const Bag: React.FC = () => {
	const dispatch = useDispatch();
	const {
		dataProduct: {
			data: { productSelected },
		},
		dataBag: {
			bag: { navigationHeader, footer, articleGroupBagData },
			products,
			totalPriceOfTheBag,
		},
	} = useSelector((state: TReducers) => state);

	useEffect(() => {
		dispatch(addNewproductToTheBag(productSelected));
	}, [dispatch, productSelected]);

	const achernarData = {
		navigationHeader,
		footer,
		articleGroupBag: _.cloneDeep(articleGroupBagData),
	};
	achernarData.articleGroupBag.display = true;
	achernarData.articleGroupBag.products = products;
	achernarData.articleGroupBag.totalPriceOfTheBag = totalPriceOfTheBag;
	return (
		<div className="bag">
			<Achernar data={achernarData} />
		</div>
	);
};
export default Bag;
