import Image from "next/image";
import Link from "next/link";
import Text from "@/components/UIKit/Text";
const NewsCard = ({ newsCardData }: any) => {
  return (
    <Link
      className="flex w-full justify-between border-b-2 py-2"
      dir="rtl"
      href={`/articles/${newsCardData.id}`}
    >
      <main className="flex flex-col text-right justify-between w-2/3">
        <Text variant="subtitle1" htmlTag="p" className="text-black text-base">
          {newsCardData?.title}
        </Text>
        <Text
          variant="caption2"
          htmlTag="span"
          className="text-justify text-sm"
        >
          {newsCardData?.content}
        </Text>
        <aside>ادامه ی مطلب</aside>
      </main>
      <div className="w-1/3 h-full">
        <Image
          className="drop-shadow-xl shadow-black rounded-xl mx-auto"
          src={newsCardData?.thumbnail}
          width={200}
          height={200}
          alt="image"
          priority={true}
        />
      </div>
    </Link>
  );
};

export default NewsCard;
