import React from 'react';
import { useStyles } from '../../../page/home/Home';
import './style.css';
import { TH1 } from './type';

type Props = TH1;

const H1: React.FC<Props> = ({ title }) => {
	const classes = useStyles();
	return <h1 className={classes.textColorTitle}> {title}</h1>;
};
export default H1;
