import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import URL_ADDRESSES from '../../../../bridge/url';
import { TReducers } from '../../../../service';
import { TProductDetails } from '../../../../service/pages/Common/type';
import { ImageAsComponent } from '../../atom';
import { Eridanus, TEridanus } from '../../template';
import './style.css';

export const useStyles = makeStyles(
	(theme: { palette: { neutral: { light: string; dark: string } } }) => ({
		root: {
			backgroundColor: theme.palette.neutral.light,
		},
		textColorTitle: {
			color: theme.palette.neutral.dark,
		},
		textColorLink: {
			color: theme.palette.neutral.dark,
		},
		textColorSpan: {
			color: theme.palette.neutral.dark,
		},
		textColorParagraph: {
			color: theme.palette.neutral.dark,
		},
		iconNeutral: {
			color: theme.palette.neutral.dark,
			fill: theme.palette.neutral.dark,
		},
		border: {
			border: `1px solid ${theme.palette.neutral.dark}`,
		},
	}),
);
const Home: React.FC = () => {
	const [sliderVariant, setSliderVariant] = useState<any[]>([]);
	const {
		dataPages: {
			home: {
				navigationHeader,
				footer,
				sliderOriginalData,
				sliderVariant1,
				pubVariant1,
			},
			data,
		},
	} = useSelector((state: TReducers) => state);

	const eridanusData: TEridanus = {
		sliderOriginal: {
			list: sliderOriginalData.list.map(
				(list: { src: string; alt: string }, index: number) => (
					<ImageAsComponent
						key={index}
						data={{
							src: list.src,
							alt: list.alt,
						}}
					/>
				),
			),
			className: sliderOriginalData.className,
		},
		sliderVariant1: { list: [], title: sliderVariant1.title, display: false },
		pubVariant1,
		navigationHeader,
		footer,
	};
	useEffect(() => {
		if (data.newArriving && data.newArriving.length > 0) {
			const sliderVariantComponents: React.SetStateAction<any[]> = [];
			data.newArriving.map((product: TProductDetails, index: number) =>
				sliderVariantComponents.push(
					<ImageAsComponent
						key={index}
						data={{
							src: `${URL_ADDRESSES.fileManager.image.load(
								`product/shoes/medium/${
									product.colorName
								}/${product.name.replace(/\s/g, '')}/${product.name.replace(
									/\s/g,
									'',
								)}_1`,
							)}`,
							alt: product.name,
						}}
					/>,
				),
			);
			setSliderVariant(sliderVariantComponents);
		}
	}, [data.newArriving]);

	eridanusData.sliderVariant1.list = sliderVariant;
	eridanusData.sliderVariant1.display =
		sliderVariant && sliderVariant.length > 0;

	return (
		<div>
			<Eridanus data={eridanusData} />
		</div>
	);
};
export default Home;
