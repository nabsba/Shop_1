import React from 'react';
import './style.css';
import TSubText from './type';

type Props = {
	data: TSubText;
};

const SubText: React.FC<Props> = ({ data }) => {
	return (
		<div className="subText">
			<p> {data}</p>
		</div>
	);
};
export default SubText;
