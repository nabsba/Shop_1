import React from 'react';
import { useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
import { TReducers } from '../../../../service';
import './style.css';
// import THome from './type';

const Home: React.FC = () => {
	const { dataPages, informationDataBaseStore } = useSelector(
		(state: TReducers) => state,
	);

	// // To grab address.com/:id
	// const { id } = useParams();
	return (
		<div>
			<h1> Hello </h1>
			<p> Bonjour ca va</p>
		</div>
	);
};
export default Home;
