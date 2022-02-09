import { TNavLink } from './../../../atom/link/type';
import { TImageAsComponent } from '../../../atom/image/type';

type TArticleOriginal = {
	imageAsComponent: TImageAsComponent;
	information: {
		name: string;
		price: string;
	};
	link?: TNavLink | undefined;
};
export default TArticleOriginal;
