import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const isAuthenticated = false;
  return (
    <header
      className="flex justify-start p-4 bg-[#232735] text-white"
      dir="rtl"
    >
      <div className="w-11/12 flex items-center gap-4">
        <div className="">
          <FaHome />
        </div>
        <Link href="/stock-market">بورس</Link>
        <Link href="/cryptocurrency">رمزارز</Link>
        <Link href="/about-us/team-members">مقالات</Link>
        <Link href="/contact-us">تماس با ما</Link>
        <Link href="/about-us">درباره‌ی ما</Link>
      </div>
      <Link
        href={`${isAuthenticated ? "/profile" : "/login"}`}
        className="justify-self-end w-1/12"
      >
        <FaUserCircle size={24} color="white" />
      </Link>
    </header>
  );
};
export default Header;
