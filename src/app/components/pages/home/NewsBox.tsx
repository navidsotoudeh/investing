import NewsCard from "./NewsCard";
const NewsBox = () => {
  return (
    <div className="flex gap-2 w-full bg-green-100 justify-center flex-col">
      <NewsCard />
      <NewsCard />
      <NewsCard />
    </div>
  );
};

export default NewsBox;
