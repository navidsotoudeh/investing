"use client";
import { useGetArticleByIdQuery } from "@/redux/services/article/articleApi";
import { useParams, notFound } from "next/navigation";
const Article = () => {
  const params = useParams();
  const { data: articleData, isFetching: articleDataIsFetching } =
    useGetArticleByIdQuery(params.articleId);
  console.log("articleData", articleData);
  return (
    <div dir="rtl" className="flex flex-col">
      <div className="w-full py-4">{articleData?.title}</div>
      <div>{articleData?.htmlContent}</div>
    </div>
  );
};

export default Article;
