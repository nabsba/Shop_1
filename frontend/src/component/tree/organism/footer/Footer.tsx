import React from 'react';
import getIcon from '../../../factory/Icon';
import { NavLinkAsComponent } from '../../atom';
import './style.css';
import TFooter from './type';

type Props = {
	data: TFooter;
};

const Footer: React.FC<Props> = ({
	data: { menusFooter, copyRightSentence, icons },
}) => {
	return (
		<div id="footer" className="flex_column">
			<div className="sub_footer_part_one flex_row_center">
				<ul>
					{menusFooter.map((menu) => (
						<li key={menu.text}>
							<NavLinkAsComponent data={{ text: menu.text, href: menu.href }} />
						</li>
					))}
				</ul>
				<div className="sub_footer_part_one_wrapper_icon flex_column">
					{icons.map((icon) => getIcon(icon))}
				</div>
			</div>
			<div className="sub_footer_part_two">{copyRightSentence}</div>
		</div>
	);
};
export default Footer;
