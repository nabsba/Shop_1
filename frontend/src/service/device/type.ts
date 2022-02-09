export type TInfoDevice = {
	isHover: boolean;
	isWebWorker: boolean;
	isServiceWorker: boolean;
	isWebService: boolean;
	isIndexDB: boolean;
	storageClient: {
		used: number | undefined;
		available: number | undefined;
	};
	modeChosen: string;
};
