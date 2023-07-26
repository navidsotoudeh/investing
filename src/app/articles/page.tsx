"use client";
import { useState } from "react";
import { useGetArticlesQuery } from "@/redux/services/article/articleApi";

//component
import ArticleCard from "../../components/pages/articles/ArticleCard";
import SimplePagination from "../../components/common/pagination/SimplePagination";

const Articles = () => {
  const [pageNumber, setPageNumber] = useState();
  console.log("pageNumber", pageNumber);
  const { data: articlesData, isFetching: articlesDataIsFetching } =
    useGetArticlesQuery(
      { params: { page: pageNumber, pageSize: 3 } },
      { skip: !true, refetchOnMountOrArgChange: true }
    );
  console.log("articlesData", articlesData);
  return (
    <div className="w-full py-4">
      {articlesData?.posts.map((articleData: any) => {
        return <ArticleCard articleData={articleData} key={articleData.id} />;
      })}
      <div className="flex w-full justify-center py-[2px] ">
        <div>
          {articlesData && articlesData?.count && (
            <SimplePagination
              className="pagination-bar"
              currentPage={pageNumber}
              totalCount={articlesData?.count}
              pageSize={3}
              onPageChange={(e: number) => {
                setPageNumber(e);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Articles;
