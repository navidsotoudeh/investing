import NewsBox from './NewsBox';
import LatestNews from './LatestNews';
const SecondSection = () => {
	return (
		<div className="mb-[200px] flex w-full justify-between gap-2">
			<NewsBox />
			<LatestNews />
		</div>
	);
};

export default SecondSection;
