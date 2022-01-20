import React from 'react';
import { H3, ImageAsComponent } from '../../../atom';
import NavLink from '../../../atom/link/NavLink';
import './style.css';
import TPubVariant1 from './type';

type Props = {
	data: TPubVariant1;
};

const PubVariant1: React.FC<Props> = ({
	data: { imageAsComponent, title, link },
}) => {
	const PubVariantHTML = (
		<div className="pub_variant_1">
			<H3 title={title} />
			<ImageAsComponent data={imageAsComponent} />
		</div>
	);
	return (
		<>
			{link ? (
				<NavLink
					data={{
						text: link.text,
						href: link.href,
						asComponent: PubVariantHTML,
					}}
				/>
			) : (
				PubVariantHTML
			)}
		</>
	);
};
export default PubVariant1;
