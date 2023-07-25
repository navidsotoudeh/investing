import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

//slices
import counterReducer from "./slices/counterSlice";
import authReducer from "./slices/auth/authSlice";

//apis
import { userApi } from "@/redux/services/userApi";
import { authApi } from "@/redux/services/auth/authApi";
import { articleApi } from "@/redux/services/article/articleApi";
import { fileApi } from "@/redux/services/file/fileApi";

export const store = configureStore({
  reducer: {
    //api
    [authApi.reducerPath]: authApi.reducer,
    [articleApi.reducerPath]: articleApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [fileApi.reducerPath]: fileApi.reducer,
    // Add the generated reducer as a specific top-level slice
    auth: authReducer,
    counterReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([
      authApi.middleware,
      articleApi.middleware,
      userApi.middleware,
      fileApi.middleware,
    ]),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
