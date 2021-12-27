import React from 'react';
import { useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
import { TReducers } from '../../../../service';
import { H1, H2, H3, Paragraph } from '../../atom';
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
			<H1 title="TITLE 1" />
			<H2 title="TITLE 2" />
			<H3 title="TITLE 3" />
			<Paragraph data="Hello" />
		</div>
	);
};
export default Home;
