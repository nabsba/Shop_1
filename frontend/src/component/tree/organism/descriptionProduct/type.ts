type TDescriptionProduct = {
	menusDescription: string[];
	descriptionData: {
		description: {
			title: string;
			text: string;
		};
		detail: {
			title: string;
			list: string[];
		};
		review: {
			title: string;
			text: string;
			list: number[];
		}[];
	};
};

export default TDescriptionProduct;
