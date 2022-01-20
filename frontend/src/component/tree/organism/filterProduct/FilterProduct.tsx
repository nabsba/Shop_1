import React from 'react';
import './style.css';
import TFilterProduct from './type';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useImmer } from 'use-immer';
import getIcon from '../../../factory/Icon';
import _ from 'lodash';
import { Span } from '../../atom';
import {
	fetchProductsFiltered,
	updateFilteringCategories,
} from '../../../../service/pages/products/dataManagment/reducer';
import { useDispatch, useSelector } from 'react-redux';
import { TReducers } from '../../../../service';

type Props = TFilterProduct;

type TElementFilter = {
	title: string;
	list: string[] | number[];
};

type TSelectionFilter = {
	[key: string]: any[];
};
const FilterProduct: React.FC<Props> = ({ data: { filteringCategories } }) => {
	const dispatch = useDispatch();
	const {
		dataProducts: {
			productsFiltered: { type, gender },
			productsFiltered,
		},
	} = useSelector((state: TReducers) => state);
	const [appareance, setAppareance] = useImmer<{
		[key: string]: boolean;
	}>({
		gender: false,
		category: false,
	});

	const [selection, setSelection] = useImmer<TSelectionFilter>({});
	const IconArrow = getIcon('Arrow');
	const handleAppearance = async (categoryName: string) => {
		const object = {
			...appareance,
		};
		_.set(object, `${categoryName}`, !object[`${categoryName}`]);
		setAppareance(object);
	};
	const handleChange = (categoryName: string, preference: string | number) => {
		const object: TSelectionFilter = _.cloneDeep(selection);
		// We init the category name
		if (!object[`${categoryName}`]) {
			object[`${categoryName}`] = [];
		}

		const isElementSelectedAlreadyInTheList = _.findIndex(
			object[`${categoryName}`],
			function (o) {
				return o === preference;
			},
		);

		// We decide if we remove or add the preference selected
		if (isElementSelectedAlreadyInTheList > -1) {
			object[`${categoryName}`].splice(isElementSelectedAlreadyInTheList, 1);
		} else {
			object[`${categoryName}`] = [...object[`${categoryName}`], preference];
		}
		// We remove any empty category
		const categories = Object.keys(object);
		categories.map((category) => {
			if (object[category] && object[category].length === 0) {
				delete object[category];
			}
		});
		dispatch(updateFilteringCategories(object));
		dispatch(fetchProductsFiltered({ preference: object, type, gender, isFetchDueToScroll: false }));
		setSelection(object);
	};
	return (
		<div className={`filter_product filter_product_nav_mobile`}>
			{filteringCategories.map((preference: TElementFilter) => (
				<div
					className={`sub_filter_product ${
						!appareance[preference.title] ? 'apply_effects_sub_filter' : ''
					}`}
					key={preference.title}
				>
					<div
						className="sub_filter_product_top flex_row_between_align_center"
						onClick={() => handleAppearance(preference.title)}
					>
						{/* <H3 title={preference.title} /> */}
						<Span data={preference.title} />
						{IconArrow}
					</div>
					<div
						className={`sub_filter_product_bottom ${
							!appareance[preference.title] ? 'apply_effects_sub_filter' : ''
						}`}
					>
						<FormGroup>
							{preference.list.map((label) => (
								<FormControlLabel
									key={label}
									control={
										<Checkbox
											onChange={() => handleChange(preference.title, label)}
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
