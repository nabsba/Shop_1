import React from 'react';
import { SelectOriginal } from '../..';
import { ImageAsComponent, Span } from '../../../atom';
import './style.css';
import TArticleVariantBag from './type';

type Props = {
	data: TArticleVariantBag;
};

const ArticleVariantBag: React.FC<Props> = ({
	data: { list, selectOriginal, imageAsComponent },
}) => {
	return (
		<div className="article_variant_bag flex_row_wrap">
			<div
				className="sub_article_variant_bag_part_1"
				style={{ position: 'relative' }}
			>
				<ImageAsComponent data={imageAsComponent} />
			</div>
			<div className="sub_article_variant_bag_part_2 flex_row_wrap">
				<div className="sub_article_variant_bag_part_2_description flex_column">
					{list.map((element, index: number) => (
						<Span key={index} data={element} />
					))}
				</div>

				<SelectOriginal data={selectOriginal} />
			</div>
		</div>
	);
};
export default ArticleVariantBag;
