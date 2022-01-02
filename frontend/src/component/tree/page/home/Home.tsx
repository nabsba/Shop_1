import React from 'react';
import { useSelector } from 'react-redux';
import URL_ADDRESSES from '../../../../bridge/url';
// import { useParams } from 'react-router-dom';
import { TReducers } from '../../../../service';
import getIcon from '../../../factory/Icon';
import {
	H1,
	H2,
	H3,
	ImageAsComponent,
	NavLinkAsComponent,
	Paragraph,
	Span,
	SubText,
} from '../../atom';
import {
	ButtonOriginal,
	ButtonVariant1,
	SelectVariant1,
	SelectOriginal,
	Stars,
	Pub,
	ArticleOriginal,
	ArticleVariantBag,
} from '../../molecule';
import {
	FilterProduct,
	Footer,
	NavigationHeader,
	Review,
	SliderOriginal,
} from '../../organism';
import ArticleGroupBag from '../../organism/articleGroup/articleGroupBag/ArticleGroupBag';

import './style.css';
// import THome from './type';

const Home: React.FC = () => {
	const { dataPages, informationDataBaseStore } = useSelector(
		(state: TReducers) => state,
	);

	// // To grab address.com/:id
	// const { id } = useParams();

	const articleVariantBag = {
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
	};
	const IconTest = getIcon('Stars');
	const footer = {
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
	};
	const listComponent = [
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
	];
	return (
		<div>
			<NavigationHeader data={'dd'} />
			<H1 title="TITLE 1" />
			<Paragraph data="tuscipit natoque penismod ege lacus. Nunc tristique elit dolor, at pulvinar felis vestibulum eget. Ut vel eros id velit dictum convallis. Aliquam sagittis tempus dui, ut porttitor sem aliquet id. Donec gravida, tortor ut efficitur maximus, mi massa pellentesque mauris, in sollicitudin augue turpis et quam. Phasellus interdum risus neque, a porta enim volutpat id. Fusce venenatis ipsum ligula, eu ultrices dui accumsan vitae. Mauris aliquet ornare urna. Sed ex purus, volutpat quis sapien at, porttitor scelerisque leo. Quisque scelerisque ex vitae arcu euismod, non malesuada lorem malesuada." />
			<H2 title="TITLE 2" />
			<H3 title="TITLE 3" />
			<Paragraph data="Hello" />
			<Span data="Span" />
			<SubText data="Sub text" />
			<ButtonOriginal data="more" />
			<ButtonVariant1 data="bag" />
			<SelectOriginal data={{ menus: [1, 2, 3], label: 'size' }} />
			<SelectVariant1
				data={{ menus: ['1', '2', '3'], label: 'size', isMultiple: false }}
			/>
			{/* {IconTest} */}
			<Stars data={{ list: [1, 1, 1, 0] }} />
			<Pub data="Hi" />
			<NavLinkAsComponent data={{ text: 'about', href: '/about' }} />
			<SliderOriginal data={{ list: listComponent, className: 'slider_' }} />
			<Review
				data={{
					title: 'Great news!',
					text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ',
					list: [1, 1, 1, 0, 0],
				}}
			/>
			<ArticleVariantBag data={articleVariantBag} />
			<ArticleGroupBag
				data={{
					list: [articleVariantBag, articleVariantBag, articleVariantBag],
				}}
			/>
			<FilterProduct data="" />
			<Footer data={footer} />
			{/* <div style={{ width: '100%', height: '50vh', position: 'relative' }}>
				<ImageAsComponent
					data={{
						src: `${URL_ADDRESSES.fileManager.image.load(
							'product/shoes/medium/blue/airzoom/airzoom_1.png',
						)}`,
						alt: 'airzoom',
					}}
				/>
			</div> */}
			{/* <ArticleOriginal
				data={{
					image: {
						src: `${URL_ADDRESSES.fileManager.image.load(
							'product/shoes/medium/blue/airzoom/airzoom_1.png',
						)}`,
						alt: 'airzoom',
					},
					information: {
						name: 'airzoom',
						price: '50$',
					},
				}}
			/> */}
		</div>
	);
};
export default Home;
