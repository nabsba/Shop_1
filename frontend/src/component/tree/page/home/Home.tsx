import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { TReducers } from '../../../../service';
import './style.css';
// import THome from './type';

const Home: React.FC = () => {
	// To grab address.com/:id
	const { id } = useParams();
	// const {
	// 	//todo: make sure you have a backup for dataNetflix
	// 	dataPages,
	// } = useSelector((state: TReducers) => state);
	// console.log(dataPages);
	return (
		<div>
			<h1> Hello </h1>
			<p> Bonjour ca va</p>
		</div>
	);
};
export default Home;
