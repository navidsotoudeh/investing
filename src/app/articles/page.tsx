"use client";
import { useGetArticlesQuery } from "@/redux/services/article/articleApi";

//component
import ArticleCard from "../../components/pages/articles/ArticleCard";
const Articles = () => {
  const { data: articlesData, isFetching: articlesDataIsFetching } =
    useGetArticlesQuery(
      { params: { pageNumber: 1, pageSize: 6 } },
      { skip: !true, refetchOnMountOrArgChange: true }
    );

  return (
    <div className="w-full py-4">
      {articlesData?.posts.map((articleData: any) => {
        return <ArticleCard articleData={articleData} key={articleData.id} />;
      })}
    </div>
  );
};

export default Articles;
