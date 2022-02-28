import React from 'react';
import ErrorBoundaryFallback from '../../../specialCase/errorBoundary/ErrorBoundaryFallback';
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
		filterProduct,
		infosTemplate,
	},
}) => {
	const classes = useStyles();
	return (
		<div className={`cassiopeia ${classes.root}`}>
			<section className="cassiopeia_section_1">
				<NavigationHeader data={navigationHeader} />
			</section>
			<ErrorBoundary
				fallbackRender={() => (
					<ErrorBoundaryFallback
						type={infosTemplate.type}
						code={infosTemplate.errorCode}
					/>
				)}
			>
				<section className="cassiopeia_section_2">
					<HeaderProduct data={headerProduct} />
				</section>

				<section
					className={`cassiopeia_section_3 flex_row ${
						headerProduct.doWedisplayFilteringComponent
							? ''
							: 'cassiopeia_section_3_effect'
					}`}
				>
					{articleGroupOriginal.list &&
						articleGroupOriginal.list.length > 0 && (
							<FilterProduct data={filterProduct} />
						)}
					<ArticleGroupOriginal data={articleGroupOriginal} />
				</section>
			</ErrorBoundary>
			<section className="cassiopeia_section_4">
				<Footer data={footer} />
			</section>
		</div>
	);
};

export default Cassiopeia;
