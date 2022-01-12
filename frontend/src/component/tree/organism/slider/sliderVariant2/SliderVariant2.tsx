import React from 'react';
import Slider from 'react-slick';
import './style.css';
import TSliderVariant2 from './type';

type Props = {
	data: TSliderVariant2;
};

const SliderVariant2: React.FC<Props> = ({ data: { list } }) => {
	const settings = {
		customPaging: (i: number) => {
			return <a>{list[i]} </a>;
		},
		dots: true,
		dotsClass: 'slick-dots slick-thumb',
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	return (
		<div className="slider_variant_2">
			<Slider {...settings}>
				{list.map((element, index) => (
					<div className={'slider_variant_2_wrapper'} key={index}>
						{element}
					</div>
				))}
			</Slider>
		</div>
	);
};
export default SliderVariant2;
