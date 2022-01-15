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
import { fetchProductsFiltered } from '../../../../service/pages/products/dataManagment/reducer';
import { useDispatch, useSelector } from 'react-redux';
import { TReducers } from '../../../../service';

type Props = TFilterProduct;

type TElementFilter = {
	title: string;
	list: string[] | number[];
};

type TSelectionFilter = {
	[key: string]: {
		selection: any;
	};
};
const FilterProduct: React.FC<Props> = ({ data: { filteringCategories } }) => {
	const dispatch = useDispatch();
	const {
		dataProducts: {
			data: { type, gender },
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
	const handleAppearance = async (elementTitle: string) => {
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

		// We init the selection proprety
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
		const elementsSelected = object[`${elementTitle}`].selection;
		// We decide if we remove or add the element selected
		if (isElementSelectedAlreadyInTheList > -1) {
			elementsSelected.splice(isElementSelectedAlreadyInTheList, 1);
		} else {
			object[`${elementTitle}`].selection = [...elementsSelected, element];
		}

		// We remove any empty category
		const categories = Object.keys(object);
		categories.map((category) => {
			if (object[category] && object[category].selection.length === 0) {
				delete object[category];
			}
		});
		dispatch(fetchProductsFiltered({ preference: object, type, gender }));
		setSelection(object);
	};
	return (
		<div className={`filter_product filter_product_nav_mobile`}>
			{filteringCategories.map((element: TElementFilter) => (
				<div
					className={`sub_filter_product ${
						!appareance[element.title] ? 'apply_effects_sub_filter' : ''
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
							!appareance[element.title] ? 'apply_effects_sub_filter' : ''
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
