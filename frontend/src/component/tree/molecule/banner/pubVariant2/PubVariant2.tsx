import React from 'react';
import { ButtonOriginal } from '../..';
import { H2, H3, ImageAsComponent } from '../../../atom';
import './style.css';
import TPubVariant2 from './type';

type Props = {
	data: TPubVariant2;
};

const PubVariant2: React.FC<Props> = ({
	data: { h3, imageAsComponent, h2, span },
}) => {
	return (
		<div className="pub_variant_2">
			<H3 title={h3} />
			{/* <H2 title={h2} /> */}
			<ImageAsComponent data={imageAsComponent} />
			<ButtonOriginal data={span} />
		</div>
	);
};
export default PubVariant2;
