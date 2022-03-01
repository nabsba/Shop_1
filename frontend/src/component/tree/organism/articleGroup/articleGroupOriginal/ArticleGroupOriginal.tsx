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

type Props = {
	data: TArticleGroupOriginal;
};

const ArticleGroupOriginal: React.FC<Props> = ({
	data: { list, pending, isServerFaulty },
}) => {
	const divRef = React.useRef<HTMLDivElement>(null);
	const dispatch = useDispatch();
	const isUserScrollingToTheBottom = useOnScreen(divRef);
	const doWeHaveProductsFetched = list && list.length > 0;
	const doWeNeedToFetchMoreProducts =
		isUserScrollingToTheBottom && doWeHaveProductsFetched;

	useEffect(() => {
		if (doWeNeedToFetchMoreProducts) {
			dispatch(updateDoWeGetMoreProducts(true));
		}
	}, [
		dispatch,
		doWeHaveProductsFetched,
		doWeNeedToFetchMoreProducts,
		isUserScrollingToTheBottom,
		list,
	]);
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
				{doWeHaveProductsFetched &&
					list.map((element: TArticleOriginal, index: number) =>
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
			{(() => {
				if (isServerFaulty) {
					// Throw error to trigger the error boundary of his parent.
					throw new Error('The server is faulty');
				}
			})()}
			<div>
				{pending && (
					<div className="cassiopeia_loader flex_row">
						<CircularIndeterminate />
					</div>
				)}
			</div>
			<div
				ref={divRef}
				style={{ display: doWeHaveProductsFetched ? 'block' : 'none' }}
			></div>
		</div>
	);
};
export default ArticleGroupOriginal;
