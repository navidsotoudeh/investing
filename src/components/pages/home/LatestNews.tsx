import { FaAngleLeft } from "react-icons/fa";
import Text from "../../UIKit/Text";
const LatestNews = () => {
  const Topics = [
    { id: 1, title: "بررسی ساختمان", quantity: 4 },
    { title: "خرید آپارتمان", quantity: 5 },
    { title: "خرید ویلا", quantity: 3 },
    { title: "سبک زندگی", quantity: 6 },
    { title: "سیاست", quantity: 2 },
  ];
  return (
    <div className="flex gap-2 w-full flex-col border-2 h-[200px] justify-center items-center">
      <Text
        htmlTag="p"
        variant="body1"
        className="my-8 mb-36 text-justify text-dark_grey"
      >
        محل قرارگیری اخرین اخبار
      </Text>
    </div>
  );
};

export default LatestNews;
