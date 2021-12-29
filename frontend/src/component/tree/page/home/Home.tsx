import React from 'react';
import { useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
import { TReducers } from '../../../../service';
import getIcon from '../../../factory/Icon';
import { H1, H2, H3, Paragraph, Span, SubText } from '../../atom';
import {
	ButtonOriginal,
	ButtonVariant1,
	SelectVariant1,
	SelectOriginal,
	Stars,
} from '../../molecule';

import './style.css';
// import THome from './type';

const Home: React.FC = () => {
	const { dataPages, informationDataBaseStore } = useSelector(
		(state: TReducers) => state,
	);

	// // To grab address.com/:id
	// const { id } = useParams();
	const IconTest = getIcon('Stars');
	return (
		<div>
			<H1 title="TITLE 1" />
			<Paragraph data="tuscipit natoque penismod ege lacus. Nunc tristique elit dolor, at pulvinar felis vestibulum eget. Ut vel eros id velit dictum convallis. Aliquam sagittis tempus dui, ut porttitor sem aliquet id. Donec gravida, tortor ut efficitur maximus, mi massa pellentesque mauris, in sollicitudin augue turpis et quam. Phasellus interdum risus neque, a porta enim volutpat id. Fusce venenatis ipsum ligula, eu ultrices dui accumsan vitae. Mauris aliquet ornare urna. Sed ex purus, volutpat quis sapien at, porttitor scelerisque leo. Quisque scelerisque ex vitae arcu euismod, non malesuada lorem malesuada." />
			<H2 title="TITLE 2" />
			<H3 title="TITLE 3" />
			<Paragraph data="Hello" />
			<Span data="Span" />
			<SubText data="Sub text" />
			<ButtonOriginal data="more" />
			<ButtonVariant1 data="bag" />
			<SelectOriginal data={{ menus: [1, 2, 3], label: 'size' }} />
			<SelectVariant1
				data={{ menus: ['1', '2', '3'], label: 'size', isMultiple: false }}
			/>
			{/* {IconTest} */}
			<Stars data={{ list: [1, 1, 1, 0] }} />
		</div>
	);
};
export default Home;
