import React from 'react';
import { TSpan } from './type';
import './style.css';
import { useStyles } from '../../page/home/Home';

type TProps = {
	data: TSpan;
};
const Span: React.FC<TProps> = ({ data }) => {
	const classes = useStyles();
	return <span className={classes.textColorSpan}> {data}</span>;
};

export default Span;
