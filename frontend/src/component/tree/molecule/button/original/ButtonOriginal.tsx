import React from 'react';
import { SubText } from '../../../atom';
import './style.css';
import TButtonOriginal from './type';

type Props = {
	data: TButtonOriginal;
};

const ButtonOriginal: React.FC<Props> = ({ data }) => {
	return (
		<button className="button_original">
			<SubText data={data} />
		</button>
	);
};
export default ButtonOriginal;
