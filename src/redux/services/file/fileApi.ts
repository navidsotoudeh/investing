import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials, logOut } from "../../slices/auth/authSlice";
import Cookies from "js-cookie";

export const fileApi = createApi({
  reducerPath: "fileApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/file" }),
  endpoints: (builder) => ({
    sendFile: builder.mutation({
      query: (fileData) => {
        return {
          url: "/image",
          method: "POST",
          body: { ...fileData },
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${Cookies.get("investing-accessToken")}`,
          },
        };
      },
      // async onQueryStarted(data, { queryFulfilled, dispatch }) {
      //   Cookies.set("investing-accessToken", "654-rm-accessToken123456");
      //   // dispatch(userLoggedIn(data.accessToken))
      //   dispatch(setCredentials("654-rm-accessToken123456"));
      //   try {
      //     // const { data } = await queryFulfilled
      //     // // localStorage.setItem('investing-accessToken', data.accessToken)
      //     // setCookie('investing-accessToken', data.accessToken)
      //     // dispatch(userLoggedIn(data.accessToken))
      //   } catch {}
      // },
    }),
  }),
});

export const { useSendFileMutation } = fileApi;
