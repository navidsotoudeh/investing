"use client";
import { useEffect } from "react";
import { useGetPostsQuery } from "@/redux/services/post/postApi";

//component
import PostCard from "../../components/pages/articles/ArticleCard";
import ArticleCard from "../../components/pages/articles/ArticleCard";
const Articles = () => {
  const { data: articlesData, isFetching: postsDataIsFetching } =
    useGetPostsQuery(
      { params: { pageNumber: 1, pageSize: 6 } },
      { skip: !true, refetchOnMountOrArgChange: true }
    );

  useEffect(() => {
    // Side-effect...
    return function cleanup() {
      // Side-effect cleanup...
    };
  }, []);

  return (
    <div className="w-full py-4">
      {articlesData?.posts.map((articleData: any) => {
        return <ArticleCard articleData={articleData} key={articleData.id} />;
      })}
    </div>
  );
};

export default Articles;
