import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setCredentials, logOut } from '../../slices/auth/authSlice';
import Cookies from 'js-cookie';

export const fileApi = createApi({
	reducerPath: 'fileApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://investing-nta8.onrender.com/file',
	}),
	endpoints: (builder) => ({
		sendFile: builder.mutation({
			query: (formData) => {
				return {
					url: '/image',
					method: 'POST',
					body: formData,
					headers: {
						'Content-type': 'application/json; charset=UTF-8',
						authorization: `Bearer ${Cookies.get('investing-accessToken')}`,
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
			//   } catch {}
			// },
		}),
	}),
});

export const { useSendFileMutation } = fileApi;
