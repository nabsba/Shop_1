/* 
Library: react-slick.neostack.com/docs.
Dependency: yarn add  react-slick  types/react-slick slick-carousel --save
<link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
Doc: https://react-slick.neostack.com/
*/

import React, { useRef } from 'react';
import './style.css';
import Slider from 'react-slick';
import TSliderOriginal from './type';
import getIcon from '../../../../factory/Icon';

type Props = {
	data: TSliderOriginal;
};

const SliderOriginal: React.FC<Props> = ({ data: { list, className } }) => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		// arrows: true,
	};

	// Add own custom arrows
	const ArrowIcon = getIcon('Arrow');
	const sliderRef = useRef<any>(null);
	const next = () => sliderRef.current?.slickNext();
	const previous = () => sliderRef.current?.slickPrev();

	// End
	return (
		<div className="slider_original">
			{/* Add own custom arrows */}
			<div className="slider_original_control flex_row_between">
				<div className="slider_arrow_previous" onClick={previous}>
					{ArrowIcon}
				</div>
				<div className="slider_arrow_next" onClick={next}>
					{ArrowIcon}
				</div>
			</div>
			{/* end */}
			<Slider {...settings} ref={sliderRef}>
				{list.map((element, index) => (
					<div className={className} key={index}>
						{element}
					</div>
				))}
			</Slider>
		</div>
	);
};
export default SliderOriginal;
