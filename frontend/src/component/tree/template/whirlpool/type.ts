import TErrorBundaryFallBack from '../../../specialCase/errorBoundary/type';
import TFooter from '../../organism/footer/type';
import TNavigationHeader from '../../organism/navigation/type';

type TWhirlpool = {
	navigationHeader: TNavigationHeader;
	footer: TFooter;
	errorBoundary: TErrorBundaryFallBack;
};

export default TWhirlpool;
