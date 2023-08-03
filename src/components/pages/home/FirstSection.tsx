import Image from "next/image";
import { FaVideo } from "react-icons/fa";

//component
import Text from "../../UIKit/Text";
const FirstSection = () => {
  return (
    <div className="flex gap-2 w-full py-2 justify-between" dir="rtl">
      <div className="w-1/2 text-right">
        <Text variant="h2" htmlTag="h1" className="font-bold">
          فاندچه
        </Text>
        <Text variant="body1" htmlTag="p" className="text-justify font-bold">
          سرمایه گذاری خرد را با کمترین پول ممکن شروع کنید
        </Text>
        <div className="text-justify mt-2">
          <Text variant="body1" htmlTag="p" className="text-justify">
            فاندچه چه میکند :
          </Text>
        </div>
        <div className="flex">
          <Text variant="body1" htmlTag="span" className="text-justify">
            با استفاده از micro invest می‌توانید از همه ریز دلار‌های خود استفاده
            کنید. فرضا شما می‌توانید پول خرد خود را سرمایه گذاری کنید و این پول
            خرد‌هایی را که به عنوان بقیه خرید‌های خود می‌گیرید به عنوان سرمایه
            گذاری مورد استفاده قرار دهید، یا می‌توانید برای خود محرک‌های
            سرمایه‌گذاری تعیین کنید، فرضا هر زمانی که از ۱۰۰ دلار بیشتر خرج
            کردید، باید خود را ملزم به سرمایه‌گذاری کنید. محرک‌های سرمایه‌گذاری
            می‌توانند بر اساس چیز‌هایی مانند برنامه و یا تراکنش باشند و یا
            می‌توانید شرایط و قوانینی را تعیین کنید که با توجه به آنها اقدام به
            سرمایه‌گذاری کنید. برنامه‌های سرمایه گذاری مزایای زیادی دارند. این
            برنامه‌ها micro invest را برای شما آسان می‌کنند. با استفاده از این
            برنامه‌ها می‌توان سرمایه گذاری خرد را خودکار و قابل تنظیم کرد. با
            استفاده از این برنامه‌ها می‌توان قوانین و محرک‌هایی را برای خود
            تعیین کرد. البته فراموش نکنید که این برنامه‌ها به صورت سالیانه یا
            ماهانه هزینه‌هایی از شما می‌گیرند و باید سرمایه‌گذاری صورت گرفته
            توسط آنها بتواند این هزینه‌ها و کارمزد‌ها را پوشش دهد.
          </Text>
        </div>
      </div>
      <Image
        src="/images/micro-investing.jpeg"
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
