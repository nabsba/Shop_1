import React from 'react';
import { Span } from '../../../atom';
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
			<div className="sub_article_group_bag_part_1">
				{list.map((element: TArticleVariantBag, index: number) => (
					<ArticleVariantBag key={index} data={element} />
				))}
			</div>
			<div className="sub_article_group_bag_part_2">
				<Span data="Price" />
				<Span data="10£" />
			</div>
		</div>
	);
};
export default ArticleGroupBag;
