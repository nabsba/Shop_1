import React from 'react';
import { TSpan } from './type';
import './style.css';

type TProps = {
	data: TSpan;
};
const Span: React.FC<TProps> = ({ data }) => {
	return <span> {data}</span>;
};

export default Span;
