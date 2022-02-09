import React from 'react';
import { useStyles } from '../../../page/home/Home';
import './style.css';
import TH3 from './type';

type Props = {
	title: TH3;
};

const H3: React.FC<Props> = ({ title }) => {
	const classes = useStyles();
	return <h3 className={classes.textColorTitle}>{title}</h3>;
};
export default H3;
