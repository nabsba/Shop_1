import React from 'react';
import URL_ADDRESSES from '../../../../bridge/url';
import {
	ArticleGroupOriginal,
	Footer,
	HeaderProduct,
	NavigationHeader,
} from '../../organism';
import './style.css';
import TCassiopeia from './type';

type Props = {
	data: TCassiopeia;
};

const cassiopeiraData = {
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
	headerProduct: {
		h2: 'Men',
		list: ['Classic', 'Running', 'Lifestyle', 'hiking', 'basketball'],
	},
	articleGroupOriginal: {
		list: [
			{
				imageAsComponent: {
					src: `${URL_ADDRESSES.fileManager.image.load(
						'product/shoes/medium/blue/airzoom/airzoom_1.png',
					)}`,
					alt: 'airzoom',
				},
				information: {
					name: 'airzoom',
					price: '50$',
				},
			},
			{
				imageAsComponent: {
					src: `${URL_ADDRESSES.fileManager.image.load(
						'product/shoes/medium/blue/airzoom/airzoom_1.png',
					)}`,
					alt: 'airzoom',
				},
				information: {
					name: 'airzoom',
					price: '50$',
				},
			},
			{
				imageAsComponent: {
					src: `${URL_ADDRESSES.fileManager.image.load(
						'product/shoes/medium/blue/airzoom/airzoom_1.png',
					)}`,
					alt: 'airzoom',
				},
				information: {
					name: 'airzoom',
					price: '50$',
				},
			},
			{
				imageAsComponent: {
					src: `${URL_ADDRESSES.fileManager.image.load(
						'product/shoes/medium/blue/airzoom/airzoom_1.png',
					)}`,
					alt: 'airzoom',
				},
				information: {
					name: 'airzoom',
					price: '50$',
				},
			},
			{
				imageAsComponent: {
					src: `${URL_ADDRESSES.fileManager.image.load(
						'product/shoes/medium/blue/airzoom/airzoom_1.png',
					)}`,
					alt: 'airzoom',
				},
				information: {
					name: 'airzoom',
					price: '50$',
				},
			},
			{
				imageAsComponent: {
					src: `${URL_ADDRESSES.fileManager.image.load(
						'product/shoes/medium/blue/airzoom/airzoom_1.png',
					)}`,
					alt: 'airzoom',
				},
				information: {
					name: 'airzoom',
					price: '50$',
				},
			},
		],
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

const Cassiopeia: React.FC<Props> = ({ data }) => {
	const { navigationHeader, headerProduct, articleGroupOriginal, footer } =
		cassiopeiraData;
	return (
		<div className="cassiopeia">
			<section className="cassiopeia_section_1">
				<NavigationHeader data={navigationHeader} />
			</section>
			<section className="cassiopeia_section_2">
				<HeaderProduct data={headerProduct} />
			</section>
			<section className="cassiopeia_section_3">
				<ArticleGroupOriginal data={articleGroupOriginal} />
			</section>
			<section className="cassiopeia_section_4">
				<Footer data={footer} />
			</section>
		</div>
	);
};
export default Cassiopeia;
