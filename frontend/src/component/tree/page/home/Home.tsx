import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
import { TReducers } from '../../../../service';
import { ImageAsComponent } from '../../atom';

import {
	Achernar,
	Eridanus,
	Vega,
	Cassiopeia,
	TEridanus,
} from '../../template';

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
		navigationHeader,
		footer,
	};

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
