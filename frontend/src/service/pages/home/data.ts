import URL_ADDRESSES from '../../Common/constant';
import { footer, navigationHeader } from '../Common/data';
import { THome } from './type';

const homeData: THome = {
	navigationHeader,
	footer,
	sliderOriginalData: {
		list: [
			{
				src: URL_ADDRESSES.fileManager.image.load(
					'product/shoes/medium/general/pic1',
				),
				alt: 'pic1',
			},
			{
				src: URL_ADDRESSES.fileManager.image.load(
					'product/shoes/medium/general/pic2',
				),
				alt: 'pic2',
			},
			{
				src: URL_ADDRESSES.fileManager.image.load(
					'product/shoes/medium/general/pic3',
				),
				alt: 'pic3',
			},
			{
				src: URL_ADDRESSES.fileManager.image.load(
					'product/shoes/medium/general/pic4',
				),
				alt: 'pic4',
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
		{
			imageAsComponent: {
				src: `${URL_ADDRESSES.fileManager.image.load(
					'product/shoes/medium/general/men',
				)}`,
				alt: 'men',
			},
			title: 'men',
			link: {
				text: 'men',
				href: '/products/shoes/men',
			},
		},
	],
};

export default homeData;
