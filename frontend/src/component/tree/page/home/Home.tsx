import React from 'react';
import { useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
import { TReducers } from '../../../../service';
import getIcon from '../../../factory/Icon';
import { H1, H2, H3, Paragraph, Span, SubText } from '../../atom';

import './style.css';
// import THome from './type';

const Home: React.FC = () => {
	const { dataPages, informationDataBaseStore } = useSelector(
		(state: TReducers) => state,
	);

	// // To grab address.com/:id
	// const { id } = useParams();
	const IconTest = getIcon('Twitter');
	return (
		<div>
			<H1 title="TITLE 1" />
			<H2 title="TITLE 2" />
			<H3 title="TITLE 3" />
			<Paragraph data="Hello" />
			<Span data="Span" />
			<SubText data="Sub text" />
			{IconTest}
		</div>
	);
};
export default Home;
