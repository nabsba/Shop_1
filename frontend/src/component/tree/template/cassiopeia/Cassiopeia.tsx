import React from 'react';
import URL_ADDRESSES from '../../../../bridge/url';
import {
	ArticleGroupOriginal,
	FilterProduct,
	Footer,
	HeaderProduct,
	NavigationHeader,
} from '../../organism';
import './style.css';
import TCassiopeia from './type';

type Props = {
	data: TCassiopeia;
};

const Cassiopeia: React.FC<Props> = ({
	data: { navigationHeader, footer, headerProduct, articleGroupOriginal },
}) => {
	return (
		<div className="cassiopeia">
			<section className="cassiopeia_section_1">
				<NavigationHeader data={navigationHeader} />
			</section>
			<section className="cassiopeia_section_2">
				<HeaderProduct data={headerProduct} />
			</section>
			{articleGroupOriginal.display && (
				<section className="cassiopeia_section_3">
					{/* <FilterProduct data="k" /> */}
					<ArticleGroupOriginal data={articleGroupOriginal} />
				</section>
			)}

			<section className="cassiopeia_section_4">
				<Footer data={footer} />
			</section>
		</div>
	);
};
export default Cassiopeia;
