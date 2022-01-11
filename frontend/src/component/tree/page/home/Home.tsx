import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import URL_ADDRESSES from '../../../../bridge/url';
// import { useParams } from 'react-router-dom';
import { TReducers } from '../../../../service';
import { generateNewArrayWithMatchingColor } from '../../../../service/pages/Common/logic/function';
import { TNewObjectWithMatchingColor } from '../../../../service/pages/Common/type';
import { ImageAsComponent } from '../../atom';

import { Eridanus, TEridanus } from '../../template';

import './style.css';
// import THome from './type';

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
		informationDataBaseStore,
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
		if (
			informationDataBaseStore.color &&
			data.newArriving &&
			data.newArriving.length > 0
		) {
			const productsWithMatchingColor: TNewObjectWithMatchingColor[] =
				generateNewArrayWithMatchingColor(
					informationDataBaseStore.color,
					data.newArriving,
				);
			const sliderVariantComponents: React.SetStateAction<any[]> = [];
			productsWithMatchingColor.map(
				(product: TNewObjectWithMatchingColor, index: number) =>
					sliderVariantComponents.push(
						<ImageAsComponent
							key={index}
							data={{
								src: `${URL_ADDRESSES.fileManager.image.load(
									`product/shoes/medium/${product.color}/${product.name.replace(
										/\s/g,
										'',
									)}/${product.name.replace(/\s/g, '')}_1.png`,
								)}`,
								alt: product.name,
							}}
						/>,
					),
			);
			setSliderVariant(sliderVariantComponents);
		}
	}, [informationDataBaseStore, data.newArriving]);

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
