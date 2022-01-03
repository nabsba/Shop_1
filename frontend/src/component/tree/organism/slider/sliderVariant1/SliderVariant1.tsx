import React from 'react';
import './style.css';
import TSliderVariant1 from './type';
import Slider from 'react-slick';
import { H3, ImageAsComponent } from '../../../atom';
import URL_ADDRESSES from '../../../../../bridge/url';

type Props = {
	data: TSliderVariant1;
};

const SliderVariant1: React.FC<Props> = ({ data: { list, title } }) => {
	const settings = {
		className: 'center',
		centerMode: true,
		infinite: false,
		centerPadding: '60px',
		slidesToShow: 1,
		speed: 500,
	};
	return (
		<div className="slider_variant_1">
			{title && <H3 title={title} />}

			<Slider {...settings}>
				{list.map((element, index) => (
					<div className={'slider_varian1_wrapper'} key={index}>
						{element}
					</div>
				))}
			</Slider>
		</div>
	);
};
export default SliderVariant1;
