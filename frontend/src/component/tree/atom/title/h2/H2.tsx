import React from 'react';
import { useStyles } from '../../../page/home/Home';
import './style.css';
import { TH2 } from './type';

type Props = TH2;

const H2: React.FC<Props> = ({ title }) => {
	const classes = useStyles();
	return <h2 className={classes.textColorTitle}> {title}</h2>;
};
export default H2;
