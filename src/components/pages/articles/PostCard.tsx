"use client";
import React from "react";
import Text from "@/components/UIKit/Text";
import Image from "next/image";
//type
import { PostInterface } from "./PostCardInterface";
interface PostCardProps {
  postData: PostInterface;
}

const PostCard: React.FC<PostCardProps> = ({ postData }) => {
  return (
    <div dir="rtl" className="border-2 shadow-amber-50 p-2 flex flex-col">
      <Text variant="h4" htmlTag="h1">
        {postData.title}
      </Text>
      <div className="flex gap-2">
        <Image src={postData.thumbnail} alt="pic" width={150} height={150} />
        <div
          className="w-full"
          dangerouslySetInnerHTML={{
            __html: postData?.htmlContent,
          }}
        />
      </div>
    </div>
  );
};

export default PostCard;
