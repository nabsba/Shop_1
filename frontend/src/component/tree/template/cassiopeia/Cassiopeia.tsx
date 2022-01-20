import React, { useState } from 'react';
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
	const [displayFilterProduct, setDisplayFilterProduct] = useState(true);
	const handleFilterProduct = () =>
		setDisplayFilterProduct(!displayFilterProduct);
	const headerProductWithFunction = {
		...headerProduct,
		functionToCall: handleFilterProduct,
	};

	return (
		<div className="cassiopeia">
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
					className={`cassiopeia_section_3 ${
						displayFilterProduct ? '' : 'cassiopeia_section_3_effect'
					}`}
				>
					{!articleGroupOriginal.pending.products && (
						<FilterProduct data={{ filteringCategories }} />
					)}
					{articleGroupOriginal.pending.productsBeingFiltered ||
					articleGroupOriginal.pending.products ? (
						<div className="cassiopeia_loader">
							<CircularIndeterminate />
						</div>
					) : articleGroupOriginal.display ? (
						<ArticleGroupOriginal data={articleGroupOriginal} />
					) : (
						<H3 title={'No products'} />
					)}
				</section>
			</ErrorBoundary>
			<section className="cassiopeia_section_4">
				<Footer data={footer} />
			</section>
		</div>
	);
};

export default Cassiopeia;
