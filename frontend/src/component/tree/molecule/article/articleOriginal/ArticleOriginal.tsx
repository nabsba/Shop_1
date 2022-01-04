import React from 'react';
import URL_ADDRESSES from '../../../../../bridge/url';
import { ImageAsComponent, Span } from '../../../atom';
import './style.css';
import TArticleOriginal from './type';

type Props = {
	data: TArticleOriginal;
};

const ArticleOriginal: React.FC<Props> = ({
	data: { imageAsComponent, information },
}) => {
	return (
		<div className="article_original">
			<div className="article_original_image_wrapper">
				<ImageAsComponent data={imageAsComponent} />
			</div>
			<div className="article_original_information">
				<Span data={information.name} />
				<Span data={information.price} />
			</div>
		</div>
	);
};
export default ArticleOriginal;
