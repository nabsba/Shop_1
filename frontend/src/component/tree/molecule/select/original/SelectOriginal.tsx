import React from 'react';
import './style.css';
import TSelectOriginal from './type';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
type Props = {
	data: TSelectOriginal;
};

const SelectOriginal: React.FC<Props> = ({ data: { menus, label } }) => {
	const [value, setValue] = React.useState('');

	const handleChange = (event: SelectChangeEvent) => {
		setValue(event.target.value);
	};

	return (
		<div>
			<FormControl sx={{ m: 1, minWidth: 80 }}>
				<InputLabel id="demo-simple-select-autowidth-label">{label}</InputLabel>
				<Select
					labelId="demo-simple-select-autowidth-label"
					id="demo-simple-select-autowidth"
					value={value}
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
