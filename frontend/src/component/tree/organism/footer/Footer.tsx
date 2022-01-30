import React from 'react';
import getIcon from '../../../factory/Icon';
import { NavLinkAsComponent, Paragraph } from '../../atom';
import { useStyles } from '../../page/home/Home';
import './style.css';
import TFooter from './type';

type Props = {
	data: TFooter;
};

const Footer: React.FC<Props> = ({
	data: { menusFooter, copyRightSentence, icons },
}) => {
	const classes = useStyles();
	return (
		<div id="footer" className={`flex_column ${classes.root}`}>
			<div className="footer">
				<div className="sub_footer_part_one flex_row_center">
					<ul>
						{menusFooter.map((menu, index) => (
							<li key={menu.text + index}>
								<NavLinkAsComponent
									data={{ text: menu.text, href: menu.href }}
								/>
							</li>
						))}
					</ul>
					<div className="sub_footer_part_one_wrapper_icon flex_column">
						{icons.map((icon) => (
							<div key={icon}> {getIcon(icon)} </div>
						))}
					</div>
				</div>
				<div className="sub_footer_part_two">
					<Paragraph data={copyRightSentence} />
				</div>
			</div>
		</div>
	);
};
export default Footer;
