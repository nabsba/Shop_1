import React from 'react';
import { NavLinkAsComponent } from '../../atom';
import { ButtonVariant1, Pub, SelectSize } from '../../molecule';
import {
	DescriptionProduct,
	Footer,
	NavigationHeader,
	SliderVariant2,
} from '../../organism';
import './style.css';
import TVega from './type';

type Props = {
	data: TVega;
};

const Vega: React.FC<Props> = ({
	data: {
		navigationHeader,
		footer,
		sliderVariant2,
		butttonVariant1,
		descriptionProduct,
		pub,
		selectSize,
	},
}) => {
	return (
		<div className="vega">
			<section className="vega_section_1">
				<NavigationHeader data={navigationHeader} />
			</section>
			{sliderVariant2.display && (
				<section className="vega_section_2">
					<SliderVariant2 data={sliderVariant2} />
				</section>
			)}
			<section className="vega_section_4">
				<SelectSize data={selectSize} />
			</section>
			<section className="vega_section_5">
				<NavLinkAsComponent
					data={{
						text: '',
						href: '/bag',
						asComponent: <ButtonVariant1 data={butttonVariant1} />,
					}}
				/>
			</section>
			<section className="vega_section_6">
				<DescriptionProduct data={descriptionProduct} />
			</section>
			<section className="vega_section_7">
				<Pub data={pub} />
			</section>
			<section className="vega_section_7">
				<Footer data={footer} />
			</section>
		</div>
	);
};
export default Vega;
