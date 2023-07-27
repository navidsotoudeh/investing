import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials, logOut } from "../../slices/auth/authSlice";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/auth" }),
  endpoints: (builder) => ({
    signupUser: builder.mutation({
      query: (signupData) => {
        return {
          url: "/signup",
          method: "POST",
          body: { ...signupData },
        };
      },
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
            console.log("res 29", res);
            Cookies.set("investing-accessToken", res?.data?.access_token);
            Cookies.set("investing-refreshToken", res?.data?.refresh_token);
            dispatch(setCredentials(res?.data));
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
    getNewAccessToken: builder.query<any, void>({
      query: () => ({
        url: "/refresh",
        headers: {
          Accept: "*/*",
          "Content-Type": "application/json",
          authorization: `Bearer ${Cookies.get("investing-refreshToken")}`,
        },
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/refresh",
        method: "POST",
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          Cookies.remove("investing-accessToken");
          // This is the solution to clear RTK Query cache after log out
          setTimeout(() => {
            dispatch(authApi.util.resetApiState());
          }, 1000);
          toast("خروج با موفقیت صورت گرفت.", {
            hideProgressBar: true,
            autoClose: 1000,
            type: "success",
          });
        } catch (err) {
          console.log(err);
        }
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
  useSignupUserMutation,
  useLoginUserMutation,
  useLogoutMutation,
  useGetNewAccessTokenQuery,
} = authApi;
