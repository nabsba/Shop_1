import React from 'react';
import { Span } from '../../../atom';
import './style.css';
import TButtonOriginal from './type';

type Props = {
	data: TButtonOriginal;
};

const ButtonOriginal: React.FC<Props> = ({ data }) => {
	return (
		<button className="button_original">
			<Span data={data} />
		</button>
	);
};
export default ButtonOriginal;
