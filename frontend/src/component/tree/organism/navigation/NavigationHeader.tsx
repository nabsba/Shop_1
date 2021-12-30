import React, { useState } from 'react';
import getIcon from '../../../factory/Icon';
import { NavLinkAsComponent, Span } from '../../atom';
import './style.css';
import TNavigationHeader from './type';
import { Navigate } from 'react-router-dom';

type Props = {
	data: TNavigationHeader;
};
const menusHeader = [
	{
		text: 'home',
		href: '/home',
	},
	{
		text: 'men',
		href: '/men',
	},
	{
		text: 'women',
		href: '/women',
	},
	{
		text: 'kids',
		href: '/kids',
	},
];
const menusBottom = [
	{
		text: 'my account',
		href: '/my account',
		icon: 'Account',
	},
	{
		text: 'store location',
		href: '/store location',
		icon: 'Location',
	},
	{
		text: 'customer care',
		href: '/customer care',
		icon: 'Heart',
	},
	{
		text: 'united kingdom',
		href: '/location',
		icon: 'Location',
	},
];
const NavigationHeader: React.FC<Props> = ({ data }) => {
	const [isBurgerClicked, setIsBurgerClicked] = useState<boolean>(false);
	const [isBagClicked, setIsBagClicked] = useState<boolean>(false);

	const BurgerIcon = getIcon('Burger');
	const BagIcon = getIcon('Bag');
	const CrossIcon = getIcon('Close');
	const TwitterIcon = getIcon('Twitter');
	const FacebookIcon = getIcon('Facebook');
	const NumberCircle = getIcon('NumberCircle', 1);

	const NavigationOnClick = (
		<div
			className={`flex_column ${
				isBurgerClicked ? 'navigation_on' : 'navigation_off'
			}`}
		>
			<div className="sub_navigation_on_part_1 flex_column">
				<div
					className="sub_navigation_on_part_1_header flex_row_end"
					onClick={() => setIsBurgerClicked(false)}
				>
					{CrossIcon}
				</div>
				<div className="sub_navigation_on_part_1_bottom flex_row">
					<ul className="sub_navigation_on_part_1_bottom_nav flex_column_evenly">
						{menusHeader.map((menu) => (
							<li key={menu.text}>
								<NavLinkAsComponent
									data={{ text: menu.text, href: menu.href }}
								/>
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className="sub_navigation_on_part_2 flex_column">
				<div className="sub_navigation_on_part_2_header flex_row_end">
					{TwitterIcon}
					{FacebookIcon}
				</div>
				<div className="sub_navigation_on_part_2_bottom flex_row">
					<ul className="sub_navigation_on_part_2_bottom_nav flex_column_evenly ">
						{menusBottom.map((menu) => (
							<li key={menu.text}>
								{getIcon(menu.icon)}
								<NavLinkAsComponent
									data={{ text: menu.text, href: menu.href }}
								/>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);

	const DoWeRedirectOrDisplayBagHTML = isBagClicked ? (
		<Navigate
			to={{
				pathname: '/purchase',
			}}
		/>
	) : (
		<>
			{NumberCircle}
			{BagIcon}
		</>
	);

	const BadAndNumberCirle = (
		<div
			className="bag_and_number_circle"
			onClick={() => setIsBagClicked(true)}
		>
			{DoWeRedirectOrDisplayBagHTML}
		</div>
	);
	return (
		<div className="navigation_header">
			{NavigationOnClick}
			<div className="navigation_header_mobile flex_row_between_align_center">
				<div
					className="sub_navigation_header_mobile_part_1 flex_row_align_items_center"
					onClick={() => setIsBurgerClicked(true)}
				>
					{BurgerIcon}
					<Span data="menu" />
				</div>
				{BadAndNumberCirle}
			</div>
			<div className="navigation_header_desktop flex_row_between_align_center">
				<div className="sub_navigation_header_desktop_part_0"></div>
				<div className="sub_navigation_header_desktop_part_1">
					<ul className="flex_row">
						{menusHeader.map((menu) => (
							<li key={menu.text}>
								<NavLinkAsComponent
									data={{ text: menu.text, href: menu.href }}
								/>
							</li>
						))}
					</ul>
				</div>
				{BadAndNumberCirle}
			</div>
		</div>
	);
};
export default NavigationHeader;
