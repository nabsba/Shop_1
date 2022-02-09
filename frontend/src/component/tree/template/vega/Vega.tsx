import React from 'react';
import ErrorBoundaryFallback from '../../../specialCase/errorBundary/ErrorBundaryFallback';
import { CircularIndeterminate, NavLinkAsComponent } from '../../atom';
import { ButtonVariant1, Pub, SelectSize } from '../../molecule';
import {
	DescriptionProduct,
	Footer,
	NavigationHeader,
	SliderVariant2,
} from '../../organism';
import { useStyles } from '../../page/home/Home';
import './style.css';
import TVega from './type';
import { ErrorBoundary } from 'react-error-boundary';

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
		pending,
		errorServer,
		infosTemplate,
	},
}) => {
	const classes = useStyles();
	return (
		<div className={`vega ${classes.root}`}>
			<ErrorBoundary
				fallbackRender={() => (
					<ErrorBoundaryFallback
						type={infosTemplate.type}
						code={infosTemplate.errorCode}
					/>
				)}
			>
				<section className="vega_section_1">
					<NavigationHeader data={navigationHeader} />
				</section>
				{sliderVariant2.list &&
					sliderVariant2.list.length > 0 &&
					!pending &&
					!errorServer && (
						<>
							<section className="vega_section_2">
								<SliderVariant2 data={sliderVariant2} />
							</section>
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
						</>
					)}
				{errorServer && (
					<ErrorBoundaryFallback
						type={infosTemplate.type}
						code={infosTemplate.errorCode}
					/>
				)}
				{true && (
					<section className="vega_section_2">
						<div className="vega_loader flex_row">
							<CircularIndeterminate />
						</div>
					</section>
				)}
				{(sliderVariant2.list && sliderVariant2.list.length > 0) ||
				pending ||
				errorServer ? (
					<section className="vega_section_7">
						<Footer data={footer} />
					</section>
				) : (
					<></>
				)}
			</ErrorBoundary>
		</div>
	);
};
export default Vega;
