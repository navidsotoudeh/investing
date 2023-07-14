"use client";
import React, { useEffect, useState } from "react";
import Text from "@/components/UIKit/Text";
import Image from "next/image";

interface PostCardProps {
  postData: any;
}

const PostCard: React.FC<PostCardProps> = ({ postData }) => {
  const [state, setState] = useState();
  console.log("postData", postData);
  useEffect(() => {
    // Side-effect...
    return function cleanup() {
      // Side-effect cleanup...
    };
  }, []);
  console.log("postData", postData);
  return (
    <div dir="rtl" className="border-2 shadow-amber-50 p-2 flex flex-col">
      <Text variant="h4" htmlTag="h1">
        {postData.title}
      </Text>
      <div className="flex">
        <Image src={postData.thumbnail} alt="pic" width={150} height={150} />
        <Text variant="body4" htmlTag="span">
          {postData.content}
        </Text>
      </div>
    </div>
  );
};

export default PostCard;
