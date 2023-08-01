"use client";
import React, { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";

//component
import Text from "../UIKit/Text/Text";
// //import Public_Relation_Icon from '../../../../../components/icons/footer/Public_Relation_Icon'
// import Public_Relation_Icon from "../../components/icons/footer/Public_Relation_Icon";
// import Support_Icon from "../../components/icons/footer/Support_Icon";
import Instagram_Grey_Icon from "../../components/icons/footer/Instagram_Grey_Icon";
import Linkedin_Grey_Icon from "../../components/icons/footer/Linkedin_Grey_Icon";
import Aparat_Grey_Icon from "../../components/icons/footer/Aparat_Grey_Icon";
const Footer = () => {
  return (
    <footer
      className="w-full h-[100px] bg-[#e0e0e0] p-4 pb-8 flex justify-between "
      dir="rtl"
    >
      <div>
        <div className="flex ">
          <IoLocationOutline size="24" color="currentColor" />
          <Text variant="body1" htmlTag="span" className="font-bold">
            {` `}آدرس:{` `}
          </Text>
        </div>
        <Text>
          تهران، خیابان شهید بهشتی، بین بخارست و وزرا، ساختمان میکرواینوستینگ ،
          تلفن: 24328008-021
        </Text>
      </div>
      <div className="flex gap-5 text-[12px] font-medium text-semi_dark">
        <Text variant="body1" htmlTag="span" className="text-[14px] font-bold">
          ما را دنبال کنید
        </Text>
        <div className="flex gap-5">
          <a
            title="instagram"
            target="_blank"
            href="https://www.instagram.com/dglandcom/"
            rel="noopener noreferrer"
          >
            <Instagram_Grey_Icon />
          </a>

          <a
            title="linkedin"
            target="_blank"
            href="https://www.linkedin.com/company/dg-land/"
            rel="noopener noreferrer"
          >
            <Linkedin_Grey_Icon />
          </a>

          <a
            title="aparat"
            href="https://www.aparat.com/dglandcom"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Aparat_Grey_Icon />
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
