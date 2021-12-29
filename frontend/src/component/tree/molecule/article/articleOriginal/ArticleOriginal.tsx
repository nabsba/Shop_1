import React from 'react';
import URL_ADDRESSES from '../../../../../bridge/url';
import { ImageAsComponent, Span } from '../../../atom';
import './style.css';
import TArticleOriginal from './type';

type Props = {
	data: TArticleOriginal;
};

const ArticleOriginal: React.FC<Props> = ({ data: { image, information } }) => {
	return (
		<div className="articleOriginal">
			<ImageAsComponent data={image} />
			<div className="article_original_information">
				<Span data={information.name} />
				<Span data={information.price} />
			</div>
		</div>
	);
};
export default ArticleOriginal;
