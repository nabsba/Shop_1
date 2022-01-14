type TSelectOriginal = {
	menus: string[] | number[];
	label: string;
	functionToCall?: (
		label: string,
		value: string | number,
		id?: string | number,
	) => void;
	id: number | string;
};

export default TSelectOriginal;
