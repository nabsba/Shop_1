import React from 'react';
import URL_ADDRESSES from '../../../../bridge/url';
import { ImageAsComponent } from '../../atom';
import { ButtonVariant1, Pub, SelectSize } from '../../molecule';
import {
	DescriptionProduct,
	Footer,
	NavigationHeader,
	SliderOriginal,
} from '../../organism';
import ImageGroup from '../../organism/imagesGroup/ImageGroup';
import './style.css';
import TVega from './type';

type Props = {
	data: TVega;
};

const vegaData = {
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
	sliderOriginal: {
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
		],
		className: 'slider_2',
	},
	imageGroup: {
		list: [
			{
				src: `${URL_ADDRESSES.fileManager.image.load(
					'product/shoes/medium/blue/airzoom/airzoom_1.png',
				)}`,
				alt: 'airzoom',
			},
			{
				src: `${URL_ADDRESSES.fileManager.image.load(
					'product/shoes/medium/blue/airzoom/airzoom_1.png',
				)}`,
				alt: 'airzoom',
			},
			{
				src: `${URL_ADDRESSES.fileManager.image.load(
					'product/shoes/medium/blue/airzoom/airzoom_1.png',
				)}`,
				alt: 'airzoom',
			},
			{
				src: `${URL_ADDRESSES.fileManager.image.load(
					'product/shoes/medium/blue/airzoom/airzoom_1.png',
				)}`,
				alt: 'airzoom',
			},
			{
				src: `${URL_ADDRESSES.fileManager.image.load(
					'product/shoes/medium/blue/airzoom/airzoom_1.png',
				)}`,
				alt: 'airzoom',
			},
			{
				src: `${URL_ADDRESSES.fileManager.image.load(
					'product/shoes/medium/blue/airzoom/airzoom_1.png',
				)}`,
				alt: 'airzoom',
			},
		],
	},
	butttonVariant1: 'bag',
	descriptionProduct: {
		menusDescription: ['description', 'detail', 'review'],
		descriptionData: {
			description: {
				title: 'shoes name',
				text: "From boot camp in the park to bodyweight exercises at the campground, these men's Reebok training shoes take you out of your routine and help make fitness fun wherever you are. Floatride Energy Foam in the forefoot gives you a lightweight feel and responsive ride. Raised lugs for better traction on any surface.",
			},
			detail: {
				title: 'Specification',
				list: ['Paragraph', 'Paragraph', 'Paragraph', 'Paragraph'],
			},
			review: {
				title: 'Great purchase! no regrets',
				list: [1, 1, 1, 1, 0],
				text: "From boot camp in the park to bodyweight exercises at the campground, these men's Reebok training shoes take you out of your routine and help make fitness fun wherever you are. Floatride Energy Foam in the forefoot gives you a lightweight feel and responsive ride. Raised lugs for better traction on any surface.",
			},
		},
	},
	pub: 'Pair up with us and get 20% OFF',
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
const Vega: React.FC<Props> = ({ data }) => {
	const {
		navigationHeader,
		sliderOriginal,
		imageGroup,
		butttonVariant1,
		pub,
		descriptionProduct,
		footer,
	} = vegaData;
	return (
		<div className="vega">
			<section className="vega_section_1">
				<NavigationHeader data={navigationHeader} />
			</section>
			<section className="vega_section_2">
				<SliderOriginal data={sliderOriginal} />
			</section>
			<section className="vega_section_3">
				<ImageGroup data={imageGroup} />
			</section>
			<section className="vega_section_4">
				<SelectSize data="" />
			</section>
			<section className="vega_section_5">
				<ButtonVariant1 data={butttonVariant1} />
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
