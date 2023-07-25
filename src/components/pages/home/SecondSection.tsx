import NewsBox from "./NewsBox";
import LatestNews from "./LatestNews";
const SecondSection = () => {
  return (
    <div className="flex gap-2 w-full justify-between mb-[200px]">
      <div className="w-1/2">
        <LatestNews />
      </div>
      <NewsBox />
    </div>
  );
};

export default SecondSection;
