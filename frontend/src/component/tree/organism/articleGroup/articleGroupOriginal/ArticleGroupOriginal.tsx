import React from 'react';
import { ArticleOriginal } from '../../../molecule';
import TArticleOriginal from '../../../molecule/article/articleOriginal/type';
import './style.css';
import TArticleGroupOriginal from './type';
import NavLink from '../../../atom/link/NavLink';

type Props = {
	data: TArticleGroupOriginal;
};

const ArticleGroupOriginal: React.FC<Props> = ({ data: { list } }) => {
	return (
		<div className="article_group_original flex_row_wrap_evenly_align_start">
			{list.map((element: TArticleOriginal, index: number) =>
				element.link ? (
					<NavLink
						key={element.link.text}
						data={{
							text: element.link.text,
							href: element.link.href,
							state: element.link.state,
							asComponent: <ArticleOriginal key={index} data={element} />,
						}}
					/>
				) : (
					<ArticleOriginal key={index} data={element} />
				),
			)}
		</div>
	);
};
export default ArticleGroupOriginal;
