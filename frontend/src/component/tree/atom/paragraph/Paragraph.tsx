import React from 'react';
import { useStyles } from '../../page/home/Home';
import './style.css';
import { TParagraph } from './type';

type Props = {
	data: TParagraph;
};

const Paragraph: React.FC<Props> = ({ data }) => {
	const classes = useStyles();
	return <p className={classes.textColorParagraph}>{data}</p>;
};
export default Paragraph;
