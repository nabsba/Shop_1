import React from 'react';
import URL_ADDRESSES from '../../../../bridge/url';
import { ImageAsComponent } from '../../atom';
import { PubVariant1, PubVariant2 } from '../../molecule';
import { Footer, NavigationHeader, SliderOriginal } from '../../organism';
import SliderVariant1 from '../../organism/slider/sliderVariant1/SliderVariant1';
import './style.css';
import TEridanus from './type';

type Props = {
	data: TEridanus;
};
const eridanusData = {
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
		],
		title: 'new arriving',
	},
	pubVariant1: [
		{
			imageAsComponent: {
				src: `${URL_ADDRESSES.fileManager.image.load(
					'product/shoes/medium/blue/airzoom/airzoom_1.png',
				)}`,
				alt: 'airzoom',
			},
			title: 'men',
		},
	],
	pubVariant2: {
		imageAsComponent: {
			src: `${URL_ADDRESSES.fileManager.image.load(
				'product/shoes/medium/blue/airzoom/airzoom_1.png',
			)}`,
			alt: 'airzoom',
		},
		h2: 'Discover',
		h3: 'Our history',
		span: 'read',
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
const { sliderVariant1, pubVariant1, pubVariant2 } = eridanusData;
const Eridanus: React.FC<Props> = ({
	data: { navigationHeader, footer, sliderOriginalData },
}) => {
	const sliderOriginal = {
		list: sliderOriginalData.list.map((list: { url: string; alt: string }) => (
			<ImageAsComponent
				key={1}
				data={{
					src: list.url,
					alt: list.alt,
				}}
			/>
		)),
		className: sliderOriginalData.className,
	};
	return (
		<div className="eridanus">
			<section className="eridanus_section_1">
				<NavigationHeader data={navigationHeader} />
			</section>
			<section className="eridanus_section_2">
				<SliderOriginal data={sliderOriginal} />
			</section>
			<section className="eridanus_section_3">
				<SliderVariant1 data={sliderVariant1} />
			</section>
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
