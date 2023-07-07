import Image from "next/image";
const NewsCard = () => {
  return (
    <div className="flex gap-2 w-full justify-between">
      <Image
        src="/images/latest-sm-1.jpg"
        alt="Vercel Logo"
        className="dark:invert"
        width={100}
        height={24}
        priority
      />
      <main className="flex flex-col text-right">
        <span className="text-black text-base">
          60 کاری که باید فوراً در مورد ساختمان انجام دهید
        </span>
        <article className="text-justify text-sm">
          بازار مسکن یکی از پرطرفدارترین بازارهای سرمایه است که هر ساله خریداران
          و سرمایه گذاران زیادی وارد آن می‌شوند
        </article>
      </main>
    </div>
  );
};

export default NewsCard;
