import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({
    // baseUrl: `${process.env.NEXT_PUBLIC_BACKEND_CORE_BASE_URL}/api`,
    baseUrl: `http://localhost:3000/post`,
  }),

  endpoints: (builder) => ({
    createPost: builder.mutation({
      query: (newPost) => {
        return {
          url: ``,
          method: 'POST',
          body: newPost,
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }
      },
    }),
  }),
})

// Export hooks for usage in functional components, which are auto-generated based on the defined endpoints
export const { useCreatePostMutation } = postApi
