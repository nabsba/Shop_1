import React, { useEffect } from 'react';
import { ArticleOriginal } from '../../../molecule';
import TArticleOriginal from '../../../molecule/article/articleOriginal/type';
import './style.css';
import TArticleGroupOriginal from './type';
import NavLink from '../../../atom/link/NavLink';
import { useDispatch } from 'react-redux';
import useOnScreen from '../../../../../service/Common/hooks/isVisible';
import { updateDoWeGetMoreProducts } from '../../../../../service/pages/products/dataManagment/reducer';
import { CircularIndeterminate } from '../../../atom';
import ErrorBoundaryFallback from '../../../../specialCase/errorBundary/ErrorBundaryFallback';

type Props = {
	data: TArticleGroupOriginal;
};

const ArticleGroupOriginal: React.FC<Props> = ({
	data: { list, pending, isServerFaulty, infosTemplate },
}) => {
	const divRef = React.useRef<HTMLDivElement>(null);
	const dispatch = useDispatch();
	const doWeGetNewPage = useOnScreen(divRef);
	useEffect(() => {
		if (doWeGetNewPage) {
			dispatch(updateDoWeGetMoreProducts(doWeGetNewPage));
		}
	}, [dispatch, doWeGetNewPage]);
	// const numberOfPages = Math.round(list.length / 10);
	// let productsByPage: { [key: string]: any }[] = [];
	// for (let i = 1; i <= numberOfPages; i++) {
	// 	productsByPage = [
	// 		...productsByPage,
	// 		{
	// 			[`page_${i}`]: list.slice((i - 1) * 15, i * 15),
	// 		},
	// 	];
	// }

	return (
		<div className="article_group_original">
			<div className="flex_row_wrap_evenly_align_start">
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
			{isServerFaulty && (
				<ErrorBoundaryFallback
					type={infosTemplate.type}
					code={infosTemplate.errorCode}
				/>
			)}
			<div>
				{pending && (
					<div className="cassiopeia_loader flex_row">
						<CircularIndeterminate />
					</div>
				)}
			</div>
			<div ref={divRef}></div>
		</div>
	);
};
export default ArticleGroupOriginal;
