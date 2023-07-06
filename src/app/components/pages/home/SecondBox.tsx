import NewsBox from "./NewsBox";
const SecondBox = () => {
  return (
    <div className="flex gap-2 w-full justify-between">
      <div className="w-1/2">کاوش موضوعات</div>
      <NewsBox />
    </div>
  );
};

export default SecondBox;
