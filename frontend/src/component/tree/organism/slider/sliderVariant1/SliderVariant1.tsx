import React from 'react';
import './style.css';
import TSliderVariant1 from './type';
import Slider from 'react-slick';
import { H3 } from '../../../atom';

type Props = {
	data: TSliderVariant1;
};

const SliderVariant1: React.FC<Props> = ({ data: { list, title } }) => {
	const settings = {
		// className: 'center',
		infinite: true,
		draggable: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		speed: 500,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
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
