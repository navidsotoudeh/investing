import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// @ts-ignore
import Cookies from "js-cookie";
export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    // baseUrl: `${process.env.NEXT_PUBLIC_BACKEND_CORE_BASE_URL}/api`,
    baseUrl: `http://localhost:3000/post`,
  }),

  endpoints: (builder) => ({
    createPost: builder.mutation({
      query: (newPost) => {
        console.log("newPost in postApi", newPost);
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
    }),
    getPosts: builder.query<any, any>({
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
      // async onQueryStarted(arg, { dispatch, queryFulfilled }) {
      //   await queryFulfilled.catch((err) => {
      //     arg;
      //     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //     // @ts-expect-error
      //     if (err?.error?.status == 401) {
      //       dispatch(setUnauthorizedStatus(true));
      //     }
      //   });
      // },
    }),
  }),
});

// Export hooks for usage in functional components, which are auto-generated based on the defined endpoints
export const { useCreatePostMutation, useGetPostsQuery } = postApi;
