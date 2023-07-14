import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials, logOut } from "../../slices/auth/authSlice";
import Router from "next/router";
import Cookies from "js-cookie";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/auth" }),
  endpoints: (builder) => ({
    signupUser: builder.mutation({
      query: (signupData) => {
        console.log("signupData", signupData);
        return {
          url: "/signup",
          method: "POST",
          body: { ...signupData },
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
    loginUser: builder.mutation({
      query: (user) => {
        return {
          url: "/login",
          method: "POST",
          body: { ...user },
        };
      },
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        await queryFulfilled
          .then((res) => {
            // dispatch(setCartInformation(res?.data));
            console.log("res", res);
            Cookies.set("investing-accessToken", res?.data?.access_token);
          })
          .catch((err) => {
            arg;
            // '@ts-expect-error'
            if (err?.error?.status == 401) {
              // dispatch(setUnauthorizedStatus(true));
            }
          });
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
    sendLogout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        Router.push("/");
        dispatch(logOut());
        Cookies.remove("investing-accessToken");
        // try {
        //   const { data } = await queryFulfilled
        //   console.log(data)
        //   Router.push('/')
        //   dispatch(logOut())
        //   setTimeout(() => {
        //     dispatch(apiSlice.util.resetApiState())
        //   }, 1000)
        // } catch (err) {
        //   console.log(err)
        // }
      },
    }),
    sendPasswordResetEmailUser: builder.mutation({
      query: (user) => {
        return {
          url: "send-reset-password-email",
          method: "POST",
          body: user,
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    resetPassword: builder.mutation({
      query: ({ actualData, id, token }) => {
        return {
          url: `/reset-password/${id}/${token}`,
          method: "POST",
          body: actualData,
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),

    changeUserPassword: builder.mutation({
      query: ({ actualData, token }) => {
        return {
          url: "changepassword",
          method: "POST",
          body: actualData,
          headers: {
            authorization: `Bearer ${token}`,
          },
        };
      },
    }),
  }),
});

export const {
  useSendLogoutMutation,
  useResetPasswordMutation,
  useSignupUserMutation,
  useLoginUserMutation,
  useSendPasswordResetEmailUserMutation,
  useChangeUserPasswordMutation,
} = authApi;
