import React from 'react';
import { H2 } from '../../../atom';
import './style.css';
import TPub from './type';

type Props = {
	data: TPub;
};

const Pub: React.FC<Props> = ({ data }) => {
	return (
		<div className="pub">
			<H2 title={data} />
		</div>
	);
};
export default Pub;
