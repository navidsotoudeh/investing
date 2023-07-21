"use client";
import React from "react";
import Text from "@/components/UIKit/Text";
import Image from "next/image";
import Link from "next/link";
//type
import { ArticleInterface } from "./ArticleCardInterface";
interface ArticleCardProps {
  articleData: ArticleInterface;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ articleData }) => {
  return (
    <Link
      dir="rtl"
      className="border-2 shadow-amber-50 p-2 flex flex-col hover:cursor-pointer"
      href={`/articles/${articleData.id}`}
    >
      <Text variant="h4" htmlTag="h1">
        {articleData.title}
      </Text>
      <div className="flex gap-2">
        <Image src={articleData.thumbnail} alt="pic" width={150} height={150} />
        <div
          className="w-full"
          dangerouslySetInnerHTML={{
            __html: articleData?.htmlContent,
          }}
        />
      </div>
    </Link>
  );
};

export default ArticleCard;
