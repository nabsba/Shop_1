import React from 'react';
import { useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
import { TReducers } from '../../../../service';
import getIcon from '../../../factory/Icon';
import { H1, H2, H3, Paragraph, Span, SubText } from '../../atom';
import { ButtonOriginal, ButtonVariant1, SelectOriginal } from '../../molecule';

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
			<Paragraph data="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nisi tellus, molestie aliquam volutpat nec, dictum a eros. Praesent tempus ex sed augue luctus, et convallis eros suscipit. Nulla viverra enim in sem commodo vulputate. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed lobortis faucibus orci. Fusce ultricies metus in velit tempus aliquet euismod eget mauris. Aliquam ac mauris finibus, mollis nisi id, malesuada lacus. Nunc tristique elit dolor, at pulvinar felis vestibulum eget. Ut vel eros id velit dictum convallis. Aliquam sagittis tempus dui, ut porttitor sem aliquet id. Donec gravida, tortor ut efficitur maximus, mi massa pellentesque mauris, in sollicitudin augue turpis et quam. Phasellus interdum risus neque, a porta enim volutpat id. Fusce venenatis ipsum ligula, eu ultrices dui accumsan vitae. Mauris aliquet ornare urna. Sed ex purus, volutpat quis sapien at, porttitor scelerisque leo. Quisque scelerisque ex vitae arcu euismod, non malesuada lorem malesuada." />
			<H2 title="TITLE 2" />
			<H3 title="TITLE 3" />
			<Paragraph data="Hello" />
			<Span data="Span" />
			<SubText data="Sub text" />
			<ButtonOriginal data="more" />
			<ButtonVariant1 data="bag" />
			<SelectOriginal data={{ menus: [1, 2, 3], label: 'size' }} />
			{IconTest}
		</div>
	);
};
export default Home;
