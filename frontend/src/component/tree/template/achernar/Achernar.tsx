import React from 'react';
import URL_ADDRESSES from '../../../../bridge/url';
import { ImageAsComponent } from '../../atom';
import { ArticleGroupBag, Footer, NavigationHeader } from '../../organism';
import SliderVariant1 from '../../organism/slider/sliderVariant1/SliderVariant1';
import './style.css';
import TAchernar from './type';

type Props = {
	data: TAchernar;
};

const achernarData = {
	sliderVariant1: {
		list: [
			<ImageAsComponent
				key={1}
				data={{
					src: `${URL_ADDRESSES.fileManager.image.load(
						'product/shoes/medium/blue/airzoom/airzoom_1.png',
					)}`,
					alt: 'airzoom',
				}}
			/>,
			<ImageAsComponent
				key={2}
				data={{
					src: `${URL_ADDRESSES.fileManager.image.load(
						'product/shoes/medium/blue/airzoom/airzoom_1.png',
					)}`,
					alt: 'airzoom',
				}}
			/>,
			<ImageAsComponent
				key={3}
				data={{
					src: `${URL_ADDRESSES.fileManager.image.load(
						'product/shoes/medium/blue/airzoom/airzoom_1.png',
					)}`,
					alt: 'airzoom',
				}}
			/>,
			<ImageAsComponent
				key={4}
				data={{
					src: `${URL_ADDRESSES.fileManager.image.load(
						'product/shoes/medium/blue/airzoom/airzoom_1.png',
					)}`,
					alt: 'airzoom',
				}}
			/>,
			<ImageAsComponent
				key={1}
				data={{
					src: `${URL_ADDRESSES.fileManager.image.load(
						'product/shoes/medium/blue/airzoom/airzoom_1.png',
					)}`,
					alt: 'airzoom',
				}}
			/>,
			<ImageAsComponent
				key={2}
				data={{
					src: `${URL_ADDRESSES.fileManager.image.load(
						'product/shoes/medium/blue/airzoom/airzoom_1.png',
					)}`,
					alt: 'airzoom',
				}}
			/>,
			<ImageAsComponent
				key={1}
				data={{
					src: `${URL_ADDRESSES.fileManager.image.load(
						'product/shoes/medium/blue/airzoom/airzoom_1.png',
					)}`,
					alt: 'airzoom',
				}}
			/>,
			<ImageAsComponent
				key={2}
				data={{
					src: `${URL_ADDRESSES.fileManager.image.load(
						'product/shoes/medium/blue/airzoom/airzoom_1.png',
					)}`,
					alt: 'airzoom',
				}}
			/>,
		],
		title: 'Our suggestion',
	},
};
const Achernar: React.FC<Props> = ({
	data: { footer, navigationHeader, articleGroupBag },
}) => {
	const { sliderVariant1 } = achernarData;
	return (
		<div className="achernar">
			<section className="achernar_section_1">
				<NavigationHeader data={navigationHeader} />
			</section>
			{articleGroupBag.display && (
				<section className="achernar_section_2">
					<ArticleGroupBag data={articleGroupBag} />
				</section>
			)}
			<section className="achernar_section_3">
				<SliderVariant1 data={sliderVariant1} />
			</section>
			<section className="achernar_section_4">
				<Footer data={footer} />
			</section>
		</div>
	);
};
export default Achernar;
