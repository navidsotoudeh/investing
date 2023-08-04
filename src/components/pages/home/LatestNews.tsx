import { FaAngleLeft } from 'react-icons/fa';
import Text from '../../UIKit/Text';
const LatestNews = () => {
	const Topics = [
		{ id: 1, title: 'بررسی ساختمان', quantity: 4 },
		{ title: 'خرید آپارتمان', quantity: 5 },
		{ title: 'خرید ویلا', quantity: 3 },
		{ title: 'سبک زندگی', quantity: 6 },
		{ title: 'سیاست', quantity: 2 },
	];
	return (
		<div className="flex h-[200px] w-1/2 flex-col items-center justify-center gap-2 border-2">
			<Text htmlTag="p" variant="body1" className="my-8 mb-36 text-justify text-dark_grey">
				محل قرارگیری اخرین اخبار
			</Text>
		</div>
	);
};

export default LatestNews;
