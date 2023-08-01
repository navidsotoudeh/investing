import NewsBox from "./NewsBox";
import LatestNews from "./LatestNews";
const SecondSection = () => {
  return (
    <div className="flex gap-2 w-full justify-between mb-[200px]">
      <NewsBox />
      <LatestNews />
    </div>
  );
};

export default SecondSection;
