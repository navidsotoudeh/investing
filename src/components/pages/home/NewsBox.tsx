import NewsCard from "./NewsCard";
const NewsBox = () => {
  return (
    <div className="flex gap-8 w-full justify-center flex-col">
      <NewsCard />
      <NewsCard />
      <NewsCard />
    </div>
  );
};

export default NewsBox;
