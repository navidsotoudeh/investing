"use client";
import { useEffect } from "react";
import { useGetPostsQuery } from "@/redux/services/post/postApi";

//component
import PostCard from "../../components/pages/articles/PostCard";
const Articles = () => {
  // RTK API (get) order
  const { data: postsData, isFetching: postsDataIsFetching } = useGetPostsQuery(
    { params: { pageNumber: 1, pageSize: 6 } },
    { skip: !true, refetchOnMountOrArgChange: true }
  );

  console.log("postsData", postsData);

  useEffect(() => {
    // Side-effect...
    return function cleanup() {
      // Side-effect cleanup...
    };
  }, []);

  return (
    <div className="w-full py-4">
      {postsData?.posts.map((postData: any) => {
        return <PostCard postData={postData} key={postData.id} />;
      })}
    </div>
  );
};

export default Articles;
