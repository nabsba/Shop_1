import React from 'react';
import { Span } from '../../../atom';
import './style.css';
import TButtonVariant1 from './type';

type Props = {
	data: TButtonVariant1;
};

const ButtonVariant1: React.FC<Props> = ({ data }) => {
	return (
		<button className="button_variant1">
			<Span data={data} />
		</button>
	);
};
export default ButtonVariant1;
