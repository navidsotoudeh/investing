import Image from "next/image";
import Link from "next/link";
const NewsCard = ({ newsCardData }: any) => {
  return (
    <Link
      className="flex w-full justify-between border-b-2 pb-2"
      dir="rtl"
      href={`/articles/${newsCardData.id}`}
    >
      <main className="flex flex-col text-right justify-between w-2/3">
        <div className="text-black text-base">{newsCardData?.title}</div>
        <article className="text-justify text-sm">
          {newsCardData?.content}
        </article>

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
