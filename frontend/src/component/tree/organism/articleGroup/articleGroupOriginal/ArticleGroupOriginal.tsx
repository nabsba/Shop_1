import React from 'react';
import { ArticleOriginal } from '../../../molecule';
import TArticleOriginal from '../../../molecule/article/articleOriginal/type';
import './style.css';
import TArticleGroupOriginal from './type';

type Props = {
	data: TArticleGroupOriginal;
};

const ArticleGroupOriginal: React.FC<Props> = ({ data: { list } }) => {
	return (
		<div className="article_group_original flex_row_wrap_evenly">
			{list.map((element: TArticleOriginal, index: number) => (
				<ArticleOriginal key={index} data={element} />
			))}
		</div>
	);
};
export default ArticleGroupOriginal;
