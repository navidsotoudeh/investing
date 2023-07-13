import Image from "next/image";
import { FaVideo } from "react-icons/fa";

//component
import Text from "../../UIKit/Text";
const FirstSection = () => {
  return (
    <div className="flex gap-2 w-full py-2 justify-between" dir="rtl">
      <div className="w-[300px] text-right">
        <Text variant="h2" htmlTag="h1">
          بوم‌بان
        </Text>
        <Text variant="body1" htmlTag="p" className="text-justify">
          بوم‌بان سامانه ارزیابی و نظارت فنی برساختمان های درحالِ بهره برداری
          درکشور است که با برقراری ارتباط بین مشتریان، مدیران و مهندسین بوم‌بان
          در سریعترین زمان ممکن، املاک شما را سه حوزه برق، مکانیک، عمران و سازه
          قبل از هرگونه خرید، فروش و اجاره، ملک، مورد بازبینی قرار داده و گزارشی
          کامل از وضعیت فنی ملک دراختیار شما قرار خواهد داد.
        </Text>
        <div className="text-justify">
          <span>بوم‌بان چه میکند، ببینید</span>
          <button className="appbtn">
            <FaVideo color="#FFF" />
          </button>
        </div>
        <ul className="">
          <li>پیشگیری از حوادث و کاهش خسارات</li>
          <li>کاهش هزینه های تعمیرات</li>
          <li>مجهز به ابزاردقیق مهندسی روز دنیا</li>
          <li>سامانه برخط درخواست و پیگیری</li>
          <li>اطمینان خاطر برای ساکنین ساختمان</li>
        </ul>
      </div>
      <div className="w-[500px]">
        <Image
          src="/images/featured-lg.jpg"
          alt="Hero box"
          className="dark:invert"
          width={500}
          height={500}
          priority
        />
      </div>
    </div>
  );
};

export default FirstSection;
