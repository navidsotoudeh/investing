"use client";
import { useGetPostByIdQuery } from "@/redux/services/post/postApi";
import { useParams, notFound } from "next/navigation";

const Article = () => {
  const params = useParams();

  const { data: articleData, isFetching: postDataIsFetching } =
    useGetPostByIdQuery(params.articleId);

  if (!articleData) notFound();

  return (
    <div dir="rtl" className="flex flex-col">
      <div className="w-full py-4">{articleData?.title}</div>
      <div>{articleData?.htmlContent}</div>
    </div>
  );
};

export default Article;
