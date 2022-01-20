import React from 'react';
import { ButtonOriginal, SelectOriginal } from '../..';
import { H3, ImageAsComponent, Span } from '../../../atom';
import './style.css';
import TArticleVariantBag from './type';

type Props = {
	data: TArticleVariantBag;
};

const ArticleVariantBag: React.FC<Props> = ({
	data: { list, selectOriginal, imageAsComponent, functionToCall },
}) => {
	return (
		<div className="article_variant_bag flex_row_wrap">
			<div
				className="sub_article_variant_bag_part_1"
				style={{ position: 'relative' }}
			>
				<ImageAsComponent data={imageAsComponent} />
			</div>
			<div className="sub_article_variant_bag_part_2 flex_row_wrap_align_center">
				<div className="sub_article_variant_bag_part_2_description flex_column">
					<H3 title="description" />
					{list.map((element, index: number) => (
						<Span key={index} data={element} />
					))}
				</div>
				<div className="sub_article_variant_bag_part_2_price_quantity flex_row">
					{selectOriginal.map((element, index) => (
						<div key={index}>
							<Span data={element.label} />
							<SelectOriginal data={element} />
						</div>
					))}
				</div>
				<div
					className="sub_article_variant_bag_part_2_price_quantity flex_row"
					onClick={() => functionToCall(Number(selectOriginal[0].id))}
				>
					<ButtonOriginal data="remove" />
				</div>
			</div>
		</div>
	);
};
export default ArticleVariantBag;
