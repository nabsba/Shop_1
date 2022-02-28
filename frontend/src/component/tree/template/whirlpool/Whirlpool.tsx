import React from 'react';
import ErrorBoundaryFallback from '../../../specialCase/errorBundary/ErrorBundaryFallback';
import { Footer, NavigationHeader } from '../../organism';
import './style.css';
import TWhirlpool from './type';

type Props = {
	data: TWhirlpool;
};

const Whirlpool: React.FC<Props> = ({
	data: { navigationHeader, footer, errorBoundary },
}) => {
	return (
		<div className="whirlpool flex_column_space_between">
			<section className="whirlpool_section_1">
				<NavigationHeader data={navigationHeader} />
			</section>
			<section className="whirlpool_section_2">
				<ErrorBoundaryFallback
					type={errorBoundary.type}
					code={errorBoundary.code}
				/>
			</section>
			<section className="whirlpool_section_2">
				<Footer data={footer} />
			</section>
		</div>
	);
};
export default Whirlpool;
