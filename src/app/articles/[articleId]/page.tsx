"use client";
import { useGetArticleByIdQuery } from "@/redux/services/article/articleApi";
import { useParams, notFound } from "next/navigation";
import {
  WhatsappShareButton,
  TelegramShareButton,
  EmailShareButton,
} from "react-share";
import { FaTelegram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
//component
import Text from "../../../components/UIKit/Text/Text";
const Article = () => {
  const params = useParams();
  const { data: articleData, isFetching: articleDataIsFetching } =
    useGetArticleByIdQuery(params.articleId);
  console.log("articleData", articleData);
  return (
    <div dir="rtl" className="flex flex-col gap-8">
      <div>breadcrumb</div>
      <div className="border-2 border-gray-100 p-4">
        <Text htmlTag="h2" className="w-full py-4">
          {articleData?.title}
        </Text>
        <article
          className="text-justify text-sm"
          dangerouslySetInnerHTML={{
            __html: articleData?.htmlContent,
          }}
        ></article>
        <aside className="border-t mt-2 py-2 flex justify-between" dir="rtl">
          <div className="flex w-[300px] gap-2">
            <TelegramShareButton
              url={articleData?.data?.link}
              style={{
                display: "flex",
                width: "50%",
                justifyContent: "center",
                gap: "0.5rem",
                alignItems: "center",
                border: "1px solid #0085FF",
                borderRadius: "0.75rem",
                paddingBottom: "0.5rem",
                paddingTop: "0.5rem",
              }}
            >
              <FaTelegram />
            </TelegramShareButton>
            <EmailShareButton
              subject={"لینک محصول"}
              body={`Hey there,\n\nI wanted to share this link with you:\n\n${articleData?.data?.canonical}`}
              url={articleData?.data?.link}
              style={{
                display: "flex",
                width: "50%",
                justifyContent: "center",
                gap: "0.5rem",
                alignItems: "center",
                border: "1px solid #505050",
                borderRadius: "0.75rem",
                paddingBottom: "0.5rem",
                paddingTop: "0.5rem",
              }}
            >
              <AiOutlineMail />
            </EmailShareButton>
            <WhatsappShareButton
              url={articleData?.data?.link}
              style={{
                display: "flex",
                width: "50%",
                justifyContent: "center",
                gap: "0.5rem",
                alignItems: "center",
                border: "1px solid #1CB65D",
                borderRadius: "0.75rem",
                paddingBottom: "0.5rem",
                paddingTop: "0.5rem",
              }}
            >
              <FaWhatsapp />
            </WhatsappShareButton>
          </div>
          <div> بورس - سرمایه گذاری :Tags </div>
        </aside>
      </div>
    </div>
  );
};

export default Article;
