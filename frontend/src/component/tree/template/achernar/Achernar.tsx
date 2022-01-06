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
	navigationHeader: {
		menusHeader: [
			{
				text: 'home',
				href: '/home',
			},
			{
				text: 'men',
				href: '/men',
			},
			{
				text: 'women',
				href: '/women',
			},
			{
				text: 'kids',
				href: '/kids',
			},
		],
		menusBottom: [
			{
				text: 'my account',
				href: '/my account',
				icon: 'Account',
			},
			{
				text: 'store location',
				href: '/store location',
				icon: 'Location',
			},
			{
				text: 'customer care',
				href: '/customer care',
				icon: 'Heart',
			},
			{
				text: 'united kingdom',
				href: '/location',
				icon: 'Location',
			},
		],
	},
	articleGroupBag: {
		list: [
			{
				selectOriginal: {
					menus: [1, 2, 3, 4, 5],
					label: 'size',
				},
				list: ['PANT', 'BLACK/GREY', 'SIZE 10'],
				imageAsComponent: {
					src: `${URL_ADDRESSES.fileManager.image.load(
						'product/shoes/medium/blue/airzoom/airzoom_1.png',
					)}`,
					alt: 'airzoom',
				},
			},
		],
	},
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
	footer: {
		menusFooter: [
			{
				text: 'home',
				href: '/home',
			},
			{
				text: 'men',
				href: '/men',
			},
			{
				text: 'women',
				href: '/women',
			},
			{
				text: 'kids',
				href: '/kids',
			},
		],
		icons: ['Twitter', 'Facebook'],
		copyRightSentence: 'Copyright © 2021 Nabil - All Rights Reserved',
	},
};
const Achernar: React.FC<Props> = ({ data }) => {
	const { navigationHeader, articleGroupBag, sliderVariant1, footer } =
		achernarData;
	return (
		<div className="achernar">
			<section className="achernar_section_1">
				<NavigationHeader data={navigationHeader} />
			</section>
			<section className="achernar_section_2">
				<ArticleGroupBag data={articleGroupBag} />
			</section>
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
