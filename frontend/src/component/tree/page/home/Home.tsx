import React, { useEffect } from 'react';
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
	const {
		dataPages: {
			home: { navigationHeader, footer, sliderOriginalData },
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
		sliderVariant1: [],
		navigationHeader,
		footer,
	};
	useEffect(() => {
		if (informationDataBaseStore.color && data.newArriving.length > 0) {
			const newArray: TNewObjectWithMatchingColor[] =
				generateNewArrayWithMatchingColor(
					informationDataBaseStore.color,
					data.newArriving,
				);

			console.log(newArray);
		}
	}, [informationDataBaseStore, data]);

	// useEffect(() => {}, [eridanusData, home]);
	// // To grab address.com/:id
	// const { id } = useParams();

	return (
		<div>
			<Eridanus data={eridanusData} />
			{/* <Cassiopeia data={''} /> */}
			{/* <Vega data={''} /> */}
			{/* <Achernar data="" /> */}
		</div>
	);
};
export default Home;
