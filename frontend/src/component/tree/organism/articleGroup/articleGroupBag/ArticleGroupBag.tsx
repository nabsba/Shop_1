import React from 'react';
import { ArticleVariantBag } from '../../../molecule';
import TArticleVariantBag from '../../../molecule/article/articleVariantBag/type';
import './style.css';
import TArticleGroupBag from './type';

type Props = {
	data: TArticleGroupBag;
};

const ArticleGroupBag: React.FC<Props> = ({ data: { list } }) => {
	return (
		<div className="article_group_bag">
			{list.map((element: TArticleVariantBag, index: number) => (
				<ArticleVariantBag key={index} data={element} />
			))}
		</div>
	);
};
export default ArticleGroupBag;
