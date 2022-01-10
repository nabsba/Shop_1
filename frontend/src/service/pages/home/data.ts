import URL_ADDRESSES from '../../../bridge/url';
import { footer, navigationHeader } from '../Common/data';

const homeData = {
	navigationHeader,
	footer,
	sliderOriginalData: {
		list: [
			{
				url: URL_ADDRESSES.fileManager.image.load(
					'product/shoes/medium/general/pic1.jpg',
				),
				alt: 'pic1.jpg',
			},
			{
				url: URL_ADDRESSES.fileManager.image.load(
					'product/shoes/medium/general/pic2.jpg',
				),
				alt: 'pic2.jpg',
			},
			{
				url: URL_ADDRESSES.fileManager.image.load(
					'product/shoes/medium/general/pic3.jpg',
				),
				alt: 'pic3.jpg',
			},
			{
				url: URL_ADDRESSES.fileManager.image.load(
					'product/shoes/medium/general/pic4.jpg',
				),
				alt: 'pic4.jpg',
			},
		],
		className: 'slider_',
	},
};

export default homeData;
