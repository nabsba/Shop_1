import { TImageAsComponent } from '../../../atom/image/type';
import TSelectOriginal from '../../select/original/type';

type TArticleVariantBag = {
	selectOriginal: TSelectOriginal;
	list: string[];
	imageAsComponent: TImageAsComponent;
};

export default TArticleVariantBag;
