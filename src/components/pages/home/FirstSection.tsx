import Image from "next/image";
import { FaVideo } from "react-icons/fa";

//component
import Text from "../../UIKit/Text";
const FirstSection = () => {
  return (
    <div className="flex gap-2 w-full py-2 justify-between" dir="rtl">
      <div className="w-1/2 text-right">
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
        <div className="text-justify mt-2">
          <Text variant="body1" htmlTag="p" className="text-justify">
            بوم‌بان چه میکند :
          </Text>
        </div>
        <ul className="">
          <Text variant="body1" htmlTag="p" className="text-justify">
            پیشگیری از حوادث و کاهش خسارات
          </Text>
          <Text variant="body1" htmlTag="p" className="text-justify">
            کاهش هزینه های تعمیرات
          </Text>
          <Text variant="body1" htmlTag="p" className="text-justify">
            مجهز به ابزاردقیق مهندسی روز دنیا
          </Text>
          <Text variant="body1" htmlTag="p" className="text-justify">
            سامانه برخط درخواست و پیگیری
          </Text>
        </ul>
      </div>
      <Image
        src="/images/inversting.webp"
        alt="Hero box"
        className="dark:invert"
        width="500"
        height="500"
        priority
      />
    </div>
  );
};

export default FirstSection;
