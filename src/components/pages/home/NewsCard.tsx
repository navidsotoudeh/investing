import Image from "next/image";
const NewsCard = () => {
  return (
    <div className="flex py-4 w-full justify-between border-b-2" dir="rtl">
      <main className="flex flex-col text-right justify-between">
        <div className="text-black text-base">
          مس مفتول روی رینگ صادراتی بورس کالا می‌رود
        </div>
        <article className="text-justify text-sm">
          به گزارش تجارت‌نیوز، نحوه تسویه در این عرضه به صورت تسویه اعتباری به
          صورت ۳۰ درصد نقدی به حساب بورس کالا در زمان تسویه و ۷۰ درصد اعتبار
          اسنادی ۲ ماهه با کارمزد ماهیانه ۲.۴۵ درصد است{" "}
        </article>
        <aside>ادامه ی مطلب</aside>
      </main>
      <div className="w-1/2 h-full">
        <Image
          className="drop-shadow-xl shadow-black rounded-full mx-auto"
          src="/images/bourse.webp"
          width={200}
          height={200}
          alt="Dave Gray"
          priority={true}
        />
      </div>
    </div>
  );
};

export default NewsCard;
