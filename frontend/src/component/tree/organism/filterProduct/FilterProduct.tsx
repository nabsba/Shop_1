import React from 'react';
import './style.css';
import TFilterProduct from './type';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useImmer } from 'use-immer';
import getIcon from '../../../factory/Icon';
import _ from 'lodash';
import { H3, Span } from '../../atom';

type Props = {
	data: TFilterProduct;
};

const elements = [
	{
		title: 'gender',
		list: ['mal', 'femele'],
	},
	{
		title: 'category',

		list: [
			'classics',
			'running',
			'lifestyle',
			'hiking',
			'basekball',
			'football',
		],
	},
	{
		title: 'size',
		list: [7, 8, 9, 10, 11, 12],
	},
	{
		title: 'price',
		list: ['under 50£', '50£-100£', '100£-200£'],
	},
];

type TElementFilter = {
	title: string;
	list: string[] | number[];
};

type TSelectionFilter = {
	[key: string]: {
		// selection: string[] | number[];
		selection: any;
	};
};
const FilterProduct: React.FC<Props> = ({ data }) => {
	const [appareance, setAppareance] = useImmer<{
		[key: string]: boolean;
	}>({
		gender: false,
		category: false,
	});
	const [selection, setSelection] = useImmer<TSelectionFilter>({});
	const IconArrow = getIcon('Arrow');
	const handleAppearance = (elementTitle: string) => {
		const object = {
			...appareance,
		};
		_.set(object, `${elementTitle}`, !object[`${elementTitle}`]);
		setAppareance(object);
	};
	const handleChange = (elementTitle: string, element: string | number) => {
		const object: TSelectionFilter = {
			...selection,
		};
		if (!object[`${elementTitle}`]) {
			object[`${elementTitle}`] = {
				selection: [],
			};
		}
		const isElementSelectedAlreadyInTheList = _.findIndex(
			object[`${elementTitle}`].selection,
			function (o) {
				return o === element;
			},
		);
		const selectionArray = object[`${elementTitle}`].selection;
		if (isElementSelectedAlreadyInTheList > -1) {
			selectionArray.splice(isElementSelectedAlreadyInTheList, 1);
		} else {
			object[`${elementTitle}`].selection = [...selectionArray, element];
		}
		setSelection(object);
	};
	return (
		<div className="filter_product filter_product">
			{elements.map((element: TElementFilter) => (
				<div
					className={`sub_filter_product ${
						appareance[element.title] ? 'apply_effects_sub_filter' : ''
					}`}
					key={element.title}
				>
					<div
						className="sub_filter_product_top flex_row_between_align_center"
						onClick={() => handleAppearance(element.title)}
					>
						{/* <H3 title={element.title} /> */}
						<Span data={element.title} />
						{IconArrow}
					</div>
					<div
						className={`sub_filter_product_bottom ${
							appareance[element.title] ? 'apply_effects_sub_filter' : ''
						}`}
					>
						<FormGroup>
							{element.list.map((label) => (
								<FormControlLabel
									key={label}
									control={
										<Checkbox
											onChange={() => handleChange(element.title, label)}
										/>
									}
									label={label}
								/>
							))}
						</FormGroup>
					</div>
				</div>
			))}
		</div>
	);
};
export default FilterProduct;
