"use client";
import { notFound } from "next/navigation";
import Link from "next/link";
import { useGetPostByIdQuery } from "@/redux/services/post/postApi";
// import { useRouter } from "next/navigation";
import { useRouter } from "next/router";

export const revalidate = 86400;

type Props = {
  params: {
    postId: string;
  };
};

export default function Article({ params: { postId } }: Props) {
  const router = useRouter();
  const { id, slug } = router.query;
  console.log("router", router);
  console.log("id", id);

  const { data: articleData, isFetching: articleDataIsFetching } =
    useGetPostByIdQuery("4");
  if (!articleData) notFound();

  const { meta, content } = articleData;

  // @ts-ignore
  const tags = meta.tags.map((tag, i) => (
    <Link key={i} href={`/tags/${tag}`}>
      {tag}
    </Link>
  ));

  return (
    <>
      <h2>naviddd</h2>
      {/*<h2 className="text-3xl mt-4 mb-0">{meta.title}</h2>*/}
      {/*<article>{content}</article>*/}
      {/*<section>*/}
      {/*  <h3>Related:</h3>*/}
      {/*  <div className="flex flex-row gap-4">{tags}</div>*/}
      {/*</section>*/}
      {/*<p className="mb-10">*/}
      {/*  <Link href="/">← Back to home</Link>*/}
      {/*</p>*/}
    </>
  );
}
