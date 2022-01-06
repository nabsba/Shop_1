import React from 'react';
import { H3, ImageAsComponent } from '../../../atom';
import './style.css';
import TPubVariant1 from './type';

type Props = {
	data: TPubVariant1;
};

const PubVariant1: React.FC<Props> = ({
	data: { imageAsComponent, title },
}) => {
	return (
		<div className="pub_variant_1">
			<H3 title={title} />
			<ImageAsComponent data={imageAsComponent} />
		</div>
	);
};
export default PubVariant1;
