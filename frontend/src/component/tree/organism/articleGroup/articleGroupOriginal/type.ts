import { TInfosTemplate } from '../../../../../service/pages/Common/type';
import TArticleOriginal from '../../../molecule/article/articleOriginal/type';

type TArticleGroupOriginal = {
	list: TArticleOriginal[];
	pending: boolean;
	infosTemplate: TInfosTemplate;
	isServerFaulty?: boolean;
};
export default TArticleGroupOriginal;
