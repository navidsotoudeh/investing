import Image from "next/image";
import Link from "next/link";
const NewsCard = ({ newsCardData }: any) => {
  return (
    <Link
      className="flex py-4 w-full justify-between border-b-2"
      dir="rtl"
      href={`/articles/${newsCardData.id}`}
    >
      <main className="flex flex-col text-right justify-between">
        <div className="text-black text-base">{newsCardData?.title}</div>

        <article
          className="text-justify text-sm"
          dangerouslySetInnerHTML={{
            __html: newsCardData?.htmlContent,
          }}
        ></article>

        <aside>ادامه ی مطلب</aside>
      </main>
      <div className="w-1/2 h-full">
        <Image
          className="drop-shadow-xl shadow-black rounded-full mx-auto"
          // src="/images/bourse.webp"
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
