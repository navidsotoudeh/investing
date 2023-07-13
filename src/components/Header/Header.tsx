import Link from "next/link";
import { FaHome } from "react-icons/fa";
import Text from "../UIKit/Text/Text";
const Header = () => {
  return (
    <header
      className="flex justify-start gap-8 p-4 bg-[#232735] text-white"
      dir="rtl"
    >
      <div className="flex items-center">
        <FaHome />
        {/*<Text>بوم بان</Text>*/}
      </div>
      <Link href="/stock-market">بورس</Link>
      <Link href="/cryptocurrency">رمزارز</Link>
      <Link href="/about-us/team-members">مقالات</Link>
      <Link href="/contact-us">تماس با ما</Link>
      <Link href="/about-us">درباره‌ی ما</Link>
    </header>
  );
};
export default Header;
