"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

//redux
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { selectIsAuthenticated } from "@/redux/slices/auth/authSlice";
import { logOut } from "@/redux/slices/auth/authSlice";

//component
import Text from "../../components/UIKit/Text/Text";

//icons
import { FaHome } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
const Header = () => {
  //instance
  const dispatch = useAppDispatch();
  const router = useRouter();
  //selectors
  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  //states
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <header
      className="flex justify-start p-4 bg-[#232735] text-white"
      dir="rtl"
    >
      <div className="w-11/12 flex items-center gap-4">
        <div className="">
          <FaHome />
        </div>
        <Text variant="body2" htmlTag="span">
          <Link href="/stock-market" className="font-mainFa ">
            بورس
          </Link>
        </Text>
        <Text variant="body2" htmlTag="span">
          <Link href="/cryptocurrency">رمزارز</Link>
        </Text>
        <Text variant="body2" htmlTag="span">
          <Link href="/about-us/team-members">اعضای تیم</Link>
        </Text>
        <Text variant="body2" htmlTag="span">
          <Link href="/articles">مقالات</Link>
        </Text>
        <Text variant="body2" htmlTag="span">
          <Link href="/contact-us">تماس با ما</Link>
        </Text>
        <Text variant="body2" htmlTag="span">
          <Link href="/about-us">درباره‌ی ما</Link>
        </Text>
      </div>
      <div
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="flex relative pr-[60px]"
      >
        <Link href={"profile"} className="justify-self-end w-1/12">
          <FaUserCircle size={24} color="white" />
        </Link>
        <>
          {isAuthenticated ? (
            <Text
              className={`absolute left-[30px] hover:cursor-pointer w-[100px] bg-gray-100 text-black rounded-xl flex justify-center items-center py-4 ${
                showTooltip ? "block" : "hidden"
              }`}
              onClick={() => dispatch(logOut())}
              htmlTag="h2"
              variant="body2"
            >
              خروج
            </Text>
          ) : (
            <Text
              onClick={() => router.push("/profile")}
              className={`absolute left-[30px] hover:cursor-pointer w-[100px] bg-gray-100 text-black rounded-xl flex justify-center items-center py-4 ${
                showTooltip ? "block" : "hidden"
              }`}
              htmlTag="h2"
              variant="body2"
            >
              ورود
            </Text>
          )}
        </>
      </div>
    </header>
  );
};
export default Header;
