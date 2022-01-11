import React from 'react';
import { useParams } from 'react-router-dom';
import { Vega } from '../../template';
import './style.css';
import TProduct from './type';

type Props = {
	data: TProduct;
};

const Product: React.FC = () => {
	const { id } = useParams();
	return (
		<div id="product">
			<Vega data="" />
		</div>
	);
};
export default Product;
