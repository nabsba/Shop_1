import TArticleOriginal from '../../../molecule/article/articleOriginal/type';

type TArticleGroupOriginal = {
	list: TArticleOriginal[];
	display: boolean;
	pending: {
		[key: string]: boolean;
	};
};
export default TArticleGroupOriginal;
