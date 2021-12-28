import * as React from 'react';
import './style.css';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import TSelectVariant1 from './type';
type Props = {
	data: TSelectVariant1;
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250,
		},
	},
};

const SelectVariant1: React.FC<Props> = ({ data: { menus, isItMultiple } }) => {
	const [menu, setMenus] = React.useState<string[]>([]);
	// const classes = useStyles();

	const handleChange = (event: SelectChangeEvent<typeof menu>) => {
		const {
			target: { value },
		} = event;
		setMenus(
			// On autofill we get a stringified value.
			typeof value === 'string' ? value.split(',') : value,
		);
	};

	return (
		<div className="select_variant1">
			<FormControl sx={{ m: 1, width: 300 }}>
				<InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
				<Select
					labelId="demo-multiple-checkbox-label"
					id="demo-multiple-checkbox"
					multiple={isItMultiple}
					value={menu}
					onChange={handleChange}
					input={<OutlinedInput label="Tag" />}
					renderValue={(selected) => selected.join(', ')}
					MenuProps={MenuProps}
				>
					{menus.map((element) => (
						<MenuItem key={element} value={element}>
							<Checkbox checked={menu.indexOf(element) > -1} />
							<ListItemText primary={element} />
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</div>
	);
};

export default SelectVariant1;
