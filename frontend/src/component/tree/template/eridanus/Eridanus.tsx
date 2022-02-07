import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import URL_ADDRESSES, { ERROR_CODE } from '../../../../service/Common/constant';
import ErrorBoundaryFallback from '../../../specialCase/errorBundary/ErrorBundaryFallback';
import { PubVariant1, PubVariant2 } from '../../molecule';
import { Footer, NavigationHeader, SliderOriginal } from '../../organism';
import SliderVariant1 from '../../organism/slider/sliderVariant1/SliderVariant1';
import { useStyles } from '../../page/home/Home';
import './style.css';
import TEridanus from './type';

type Props = {
	data: TEridanus;
};
const eridanusData = {
	pubVariant2: {
		imageAsComponent: {
			src: `${URL_ADDRESSES.fileManager.image.load(
				'product/shoes/medium/blue/airzoom/airzoom_1',
			)}`,
			alt: 'airzoom',
		},
		h2: 'Discover',
		h3: 'Our history',
		span: 'read',
	},
};
const { pubVariant2 } = eridanusData;
const Eridanus: React.FC<Props> = ({
	data: {
		navigationHeader,
		footer,
		sliderOriginal,
		sliderVariant1,
		pubVariant1,
	},
}) => {
	const classes = useStyles();

	return (
		<div className={`eridanus ${classes.root}`}>
			<section className="eridanus_section_1">
				<NavigationHeader data={navigationHeader} />
			</section>
			<section className="eridanus_section_2">
				<SliderOriginal data={sliderOriginal} />
			</section>
			<ErrorBoundary
				fallbackRender={() => (
					<ErrorBoundaryFallback type={'sliders'} code={ERROR_CODE.SLIDER} />
				)}
			>
				{sliderVariant1.display && (
					<section className="eridanus_section_3">
						<SliderVariant1 data={sliderVariant1} />
					</section>
				)}
			</ErrorBoundary>
			<section className="eridanus_section_4">
				{pubVariant1.map((pub) => (
					<PubVariant1 key={pub.title} data={pub} />
				))}
			</section>
			<section className="eridanus_section_5">
				<PubVariant2 data={pubVariant2} />
			</section>
			<section className="eridanus_section_6">
				<Footer data={footer} />{' '}
			</section>
		</div>
	);
};
export default Eridanus;
