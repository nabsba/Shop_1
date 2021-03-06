import React from 'react';
import './style.css';
import TSelectOriginal from './type';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useStyles } from '../../../page/home/Home';
type Props = {
	data: TSelectOriginal;
};

const SelectOriginal: React.FC<Props> = ({
	data: { menus, label, functionToCall, id },
}) => {
	const [value, setValue] = React.useState('');
	const classes = useStyles();
	const handleChange = (event: SelectChangeEvent) => {
		setValue(event.target.value);
		if (functionToCall) {
			functionToCall(label, event.target.value, id);
		}
	};

	return (
		<div className={`select_original ${classes.border}`}>
			<FormControl sx={{ m: 1, minWidth: 80 }}>
				<InputLabel id="demo-simple-select-autowidth-label">{label}</InputLabel>
				<Select
					labelId="demo-simple-select-autowidth-label"
					id="demo-simple-select-autowidth"
					value={value ? value : menus[0] + ''}
					className={classes.iconNeutral}
					onChange={handleChange}
					autoWidth
					label={label}
				>
					{menus.map((menu: string | number, index: number) => (
						<MenuItem key={menu + '' + index} value={menu}>
							{menu}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</div>
	);
};
export default SelectOriginal;
