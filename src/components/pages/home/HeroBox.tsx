import Image from "next/image";
import { FaVideo } from "react-icons/fa";
const HeroBox = () => {
  return (
    <div className="flex gap-2 w-full bg-green-100 justify-between">
      <div className="w-[300px] text-right">
        <h1>بوم‌بان</h1>
        <p>
          بوم‌بان سامانه ارزیابی و نظارت فنی برساختمان های درحالِ بهره برداری
          درکشور است که با برقراری ارتباط بین مشتریان، مدیران و مهندسین بوم‌بان
          در سریعترین زمان ممکن، املاک شما را سه حوزه برق، مکانیک، عمران و سازه
          قبل از هرگونه خرید، فروش و اجاره، ملک، مورد بازبینی قرار داده و گزارشی
          کامل از وضعیت فنی ملک دراختیار شما قرار خواهد داد.
        </p>
        <div className="">
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

export default HeroBox;
