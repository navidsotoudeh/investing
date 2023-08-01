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
import Breadcrumb from "../../../components/UIKit/Breadcrumb/Breadcrumb";
const Article = () => {
  const params = useParams();
  const { data: articleData, isFetching: articleDataIsFetching } =
    useGetArticleByIdQuery(params.articleId);

  console.log("articleData", articleData);
  const items = [
    { label: "خانه", href: "/" },
    { label: "مقالات", href: "/articles" },
    { label: `${articleData?.title}`, href: `${articleData?.id}` },
  ];

  return (
    <div dir="rtl" className="flex flex-col gap-8">
      <div className="w-full py-2">
        <Breadcrumb items={items} />
      </div>
      <div className="border-2 border-gray-100 p-4">
        <Text htmlTag="h2" className="w-full py-4">
          {articleData?.title}
        </Text>
        <Text variant="body2" htmlTag="span" className="text-justify">
          <article
            className="text-justify text-sm"
            dangerouslySetInnerHTML={{
              __html: articleData?.htmlContent,
            }}
          />
        </Text>
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
              <FaTelegram color="#0088cc" />
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
                border: "1px solid #e74c3c",
                borderRadius: "0.75rem",
                paddingBottom: "0.5rem",
                paddingTop: "0.5rem",
              }}
            >
              <AiOutlineMail color="red" />
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
              <FaWhatsapp color="#4ada80" />
            </WhatsappShareButton>
          </div>
          <Text htmlTag="span" variant="body2">
            بورس - سرمایه گذاری :Tags{" "}
          </Text>
        </aside>
      </div>
    </div>
  );
};

export default Article;
