import { FaAngleLeft } from "react-icons/fa";
import Text from "../../UIKit/Text";
const Topics = () => {
  const Topics = [
    { id: 1, title: "بررسی ساختمان", quantity: 4 },
    { title: "خرید آپارتمان", quantity: 5 },
    { title: "خرید ویلا", quantity: 3 },
    { title: "سبک زندگی", quantity: 6 },
    { title: "سیاست", quantity: 2 },
  ];
  return (
    <div className="flex gap-2 w-full flex-col">
      <Text
        htmlTag="p"
        variant="body1"
        className="my-8 mb-36 text-justify text-dark_grey"
      >
        به دی‌جی‌لند، گسترده‌ترین فروشگاه زنجیره‌ای کالای دیجیتال خوش‌آمدید.
        دی‌جی‌لند با بیش از ۲۰ سال سابقه موفق در زمینه ارائه معتبرترین و
        به‌روزترین کالاهای دیجیتال در راستای تسهیل امر خرید اینترنتی، سال ۱۳۹۸
        فروشگاه اینترنتی خود را افتتاح کرد و در حال حاضر ۷ شعبه فعال در سراسر
        کشور دارد. فروشگاه اینترنتی دی‌جی‌لند دارای نماد اعتماد الکترونیکی و
        مرکز رسمی فروش معتبرترین کالاهای دیجیتال از برترین برندهای دنیاست؛ در
        این فروشگاه مشتریان با تنوع محصولاتی مانند گوشی موبایل،تبلت، لپ‌تاپ،
        هدفون و هندزفری، ساعت هوشمند، لوازم صوتی و تصویری، لوازم جانبی، .تجهیزات
        ذخیره‌سازی و دیگر کالاهای دیجیتال روبه‌رو هستند.
      </Text>
      <Text variant="h1" className="flex w-full items-start text-Error-60">
        موضوعات
      </Text>
      {Topics.map((topic) => (
        <div key={topic.id} className="flex justify-end gap-2">
          <span>{topic.quantity}</span>
          <span>{topic.title}</span>
          <FaAngleLeft color="red" />
        </div>
      ))}
    </div>
  );
};

export default Topics;
