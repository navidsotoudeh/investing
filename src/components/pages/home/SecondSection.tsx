import NewsBox from "./NewsBox";
import Topics from "./Topics";
const SecondSection = () => {
  return (
    <div className="flex gap-2 w-full justify-between">
      <div className="w-1/2">
        <Topics />
      </div>
      <NewsBox />
    </div>
  );
};

export default SecondSection;
