import React from 'react';
import { useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
import { TReducers } from '../../../../service';

import { Achernar, Eridanus, Vega, Cassiopeia } from '../../template';

import './style.css';
// import THome from './type';

const Home: React.FC = () => {
	const { dataPages:{home}, informationDataBaseStore } = useSelector(
		(state: TReducers) => state,
	);
  
	// // To grab address.com/:id
	// const { id } = useParams();

	return (
		<div>
			<Eridanus data={home} />
			{/* <Cassiopeia data={''} /> */}
			{/* <Vega data={''} /> */}
			{/* <Achernar data="" /> */}
		</div>
	);
};
export default Home;
