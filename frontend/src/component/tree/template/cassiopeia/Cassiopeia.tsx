import React, { useEffect, useState } from 'react';
import ErrorBoundaryFallback from '../../../specialCase/errorBundary/ErrorBundaryFallback';
import { CircularIndeterminate, H3 } from '../../atom';
import {
	ArticleGroupOriginal,
	FilterProduct,
	Footer,
	HeaderProduct,
	NavigationHeader,
} from '../../organism';
import './style.css';
import TCassiopeia from './type';
import { ErrorBoundary } from 'react-error-boundary';
import { ERROR_CODE } from '../../../../Common/constant';
import useOnScreen from '../../../../service/Common/hooks/isVisible';
import { useDispatch } from 'react-redux';
import { updateDoWeGetMoreProducts } from '../../../../service/pages/products/dataManagment/reducer';
import { useStyles } from '../../page/home/Home';
type Props = {
	data: TCassiopeia;
};

const Cassiopeia: React.FC<Props> = ({
	data: {
		navigationHeader,
		footer,
		headerProduct,
		articleGroupOriginal,
		filteringCategories,
	},
}) => {
	const divRef = React.useRef<HTMLDivElement>(null);
	const dispatch = useDispatch();
	const classes = useStyles();

	const [displayFilterProduct, setDisplayFilterProduct] = useState(true);
	const handleFilterProduct = () =>
		setDisplayFilterProduct(!displayFilterProduct);
	const headerProductWithFunction = {
		...headerProduct,
		functionToCall: handleFilterProduct,
	};

	const doWeGetNewPage = useOnScreen(divRef);
	useEffect(() => {
		dispatch(updateDoWeGetMoreProducts(doWeGetNewPage));
	}, [dispatch, doWeGetNewPage]);

	return (
		<div className={`cassiopeia ${classes.root}`}>
			<section className="cassiopeia_section_1">
				<NavigationHeader data={navigationHeader} />
			</section>
			<section className="cassiopeia_section_2">
				<HeaderProduct data={headerProductWithFunction} />
			</section>
			<ErrorBoundary
				fallbackRender={() => (
					<ErrorBoundaryFallback
						type={'products'}
						code={ERROR_CODE.FETCH_PRODUCTS}
					/>
				)}
			>
				<section
					className={`cassiopeia_section_3 flex_row ${
						displayFilterProduct ? '' : 'cassiopeia_section_3_effect'
					}`}
				>
					{!articleGroupOriginal.pending.products && (
						<FilterProduct
							data={{
								filteringCategories,
								functionToCall: handleFilterProduct,
							}}
						/>
					)}
					{articleGroupOriginal.pending.productsBeingFiltered ||
					articleGroupOriginal.pending.products ? (
						<div className="cassiopeia_loader">
							<CircularIndeterminate />
						</div>
					) : articleGroupOriginal.display ? (
						<ArticleGroupOriginal data={articleGroupOriginal} />
					) : (
						<div className="products_empty">
							<H3 title={'No products'} />
						</div>
					)}
				</section>
			</ErrorBoundary>
			<section className="cassiopeia_section_4" ref={divRef}>
				<Footer data={footer} />
			</section>
		</div>
	);
};

export default Cassiopeia;
