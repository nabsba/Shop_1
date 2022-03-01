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
import { useStyles } from '../../page/home/Home';

type Props = {
	data: TFilterProduct;
};

type TElementFilter = {
	title: string;
	list: string[] | number[];
};

type TSelectionFilter = {
	[key: string]: any[];
};
const FilterProduct: React.FC<Props> = ({
	data: { filteringCategories, functionToCall, areProductsBeingFetched },
}) => {
	const dispatch = useDispatch();
	const classes = useStyles();
	const {
		dataProducts: { productsFiltered },
	} = useSelector((state: TReducers) => state);
	const [appareance, setAppareance] = useImmer<{
		[key: string]: boolean;
	}>({
		gender: false,
		category: false,
	});

	const IconArrow = getIcon('Arrow');
	const handleAppearance = async (categoryName: string) => {
		const object = {
			...appareance,
		};
		_.set(object, `${categoryName}`, !object[`${categoryName}`]);
		setAppareance(object);
	};
	const handleChange = (categoryName: string, preference: string | number) => {
		const object: TSelectionFilter = _.cloneDeep(
			productsFiltered.filteringCategories,
		);
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
		dispatch(
			fetchProductsFiltered({
				preference: object,
				type: productsFiltered.type,
				gender: productsFiltered.gender,
				isFetchDueToScroll: false,
			}),
		);
	};
	const IconCross = getIcon('Close');
	return (
		<div className={`filter_product filter_product_nav_mobile ${classes.root}`}>
			<div
				className={`filter_product_close ${classes.iconNeutral} flex_row_justify_end`}
				onClick={() => {
					if (functionToCall) {
						functionToCall();
					}
				}}
			>
				{IconCross}
			</div>
			{filteringCategories.map((preference: TElementFilter) => {
				return (
					<div
						className={`sub_filter_product ${
							!appareance[preference.title] ? 'apply_effects_sub_filter' : ''
						}`}
						key={preference.title}
					>
						<div
							className={`sub_filter_product_top flex_row_between_align_center ${classes.textColorSpan}`}
							onClick={() => handleAppearance(preference.title)}
						>
							<Span data={preference.title} />
							<div className={classes.iconNeutral}>{IconArrow}</div>
						</div>
						<div
							className={`sub_filter_product_bottom ${
								!appareance[preference.title] ? 'apply_effects_sub_filter' : ''
							}`}
						>
							<FormGroup>
								{preference.list.map((label) => (
									<FormControlLabel
										className={classes.textColorSpan}
										key={label}
										disabled={areProductsBeingFetched}
										checked={
											//Check in the reducer if it's already selected (in case if the user check a shoes)
											productsFiltered.filteringCategories[preference.title]
												? productsFiltered.filteringCategories[
														preference.title
												  ].includes(label)
												: false
										}
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
				);
			})}
		</div>
	);
};
export default FilterProduct;
