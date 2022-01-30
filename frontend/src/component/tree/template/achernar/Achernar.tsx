import React from 'react';
import { ArticleGroupBag, Footer, NavigationHeader } from '../../organism';
import SliderVariant1 from '../../organism/slider/sliderVariant1/SliderVariant1';
import { useStyles } from '../../page/home/Home';
import './style.css';
import TAchernar from './type';

type Props = {
	data: TAchernar;
};

const Achernar: React.FC<Props> = ({
	data: { footer, navigationHeader, articleGroupBag, sliderVariant1 },
}) => {
	const classes = useStyles();

	return (
		<div className={`achernar ${classes.root}`}>
			<section className="achernar_section_1">
				<NavigationHeader data={navigationHeader} />
			</section>
			{articleGroupBag.display && (
				<section className="achernar_section_2">
					<ArticleGroupBag data={articleGroupBag} />
				</section>
			)}
			<section className="achernar_section_3">
				<SliderVariant1 data={sliderVariant1} />
			</section>
			<section className="achernar_section_4">
				<Footer data={footer} />
			</section>
		</div>
	);
};
export default Achernar;
