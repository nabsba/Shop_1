import URL_ADDRESSES from '../../../bridge/url';
import { footer, navigationHeader } from '../Common/data';

const homeData = {
	navigationHeader,
	footer,
	sliderOriginalData: {
		list: [
			{
				src: URL_ADDRESSES.fileManager.image.load(
					'product/shoes/medium/general/pic1.jpg',
				),
				alt: 'pic1.jpg',
			},
			{
				src: URL_ADDRESSES.fileManager.image.load(
					'product/shoes/medium/general/pic2.jpg',
				),
				alt: 'pic2.jpg',
			},
			{
				src: URL_ADDRESSES.fileManager.image.load(
					'product/shoes/medium/general/pic3.jpg',
				),
				alt: 'pic3.jpg',
			},
			{
				src: URL_ADDRESSES.fileManager.image.load(
					'product/shoes/medium/general/pic4.jpg',
				),
				alt: 'pic4.jpg',
			},
		],
		className: 'slider_',
	},
	sliderVariant1: {
		list: [],
		title: 'new arriving',
		display: false,
	},
	pubVariant1: [
		// `../../../../../asset/image/product/${type}/${sizePic}/general/${namePic}`,
		{
			imageAsComponent: {
				src: `${URL_ADDRESSES.fileManager.image.load(
					'product/shoes/medium/general/men.jpg',
				)}`,
				alt: 'men',
			},
			title: 'men',
			link: {
				text: 'men',
				href: '/product/men',
			},
		},
	],
};

export default homeData;
