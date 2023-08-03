import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

export const articleApi = createApi({
  reducerPath: "articleApi",
  baseQuery: fetchBaseQuery({
    // baseUrl: `${process.env.NEXT_PUBLIC_BACKEND_CORE_BASE_URL}/api`,
    baseUrl: `https://investing-nta8.onrender.com/`,
  }),

  endpoints: (builder) => ({
    createArticle: builder.mutation({
      query: (newPost) => {
        return {
          url: "/post",
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
          .then((res) => {})
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
          url: "post",
          headers: {
            Accept: "*/*",
            "Content-Type": "application/json",
          },
          params: {
            page: params.pageNumber,
            pageSize: params.pageSize,
          },
        };
      },
    }),
    getArticleById: builder.query<any, any>({
      query: (payload) => {
        return {
          url: `post/${Number(payload)}`,
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
