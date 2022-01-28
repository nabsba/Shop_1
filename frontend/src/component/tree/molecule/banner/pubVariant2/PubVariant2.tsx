import React from 'react';
import { ButtonOriginal } from '../..';
import { H3, ImageAsComponent } from '../../../atom';
import './style.css';
import TPubVariant2 from './type';

type Props = {
	data: TPubVariant2;
};

const PubVariant2: React.FC<Props> = ({
	data: { h3, imageAsComponent, span },
}) => {
	return (
		<div className="pub_variant_2">
			<H3 title={h3} />
			<ImageAsComponent data={imageAsComponent} />
			<ButtonOriginal data={span} />
		</div>
	);
};
export default PubVariant2;
