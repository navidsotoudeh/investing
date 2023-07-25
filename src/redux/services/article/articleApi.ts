import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

export const articleApi = createApi({
  reducerPath: "articleApi",
  baseQuery: fetchBaseQuery({
    // baseUrl: `${process.env.NEXT_PUBLIC_BACKEND_CORE_BASE_URL}/api`,
    baseUrl: `http://localhost:3000/post`,
  }),

  endpoints: (builder) => ({
    createArticle: builder.mutation({
      query: (newPost) => {
        return {
          url: ``,
          method: "POST",
          body: newPost,
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${Cookies.get("investing-accessToken")}`,
          },
        };
      },
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        await queryFulfilled
          .then((res) => {
            console.log("aaaa28");
          })
          .catch((err) => {
            arg;
            // '@ts-expect-error'
            if (err?.error?.status == 401) {
              // dispatch(setUnauthorizedStatus(true));
            }
          });
      },
    }),
    getArticles: builder.query<any, any>({
      query: (payload) => {
        const { params } = payload;
        return {
          url: "",
          headers: {
            Accept: "*/*",
            "Content-Type": "application/json",
          },
          params: {
            page: params.page,
            pageSize: params.pageSize,
          },
        };
      },
    }),
    getArticleById: builder.query<any, any>({
      query: (payload) => {
        console.log("payload", payload);
        return {
          url: `/${Number(payload)}`,
          headers: {
            Accept: "*/*",
            "Content-Type": "application/json",
          },
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are auto-generated based on the defined endpoints
export const {
  useCreateArticleMutation,
  useGetArticlesQuery,
  useGetArticleByIdQuery,
} = articleApi;