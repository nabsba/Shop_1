import React from 'react';
import './style.css';
import TNumberCircle from './type';

type Props = {
	data: TNumberCircle;
};

const NumberCircle: React.FC<Props> = ({ data }) => {
	return <div className="numberCircle">{data}</div>;
};
export default NumberCircle;
