import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

//slices
import counterReducer from "./slices/counterSlice";
import authReducer from "./slices/auth/authSlice";

//apis
import { userApi } from "@/redux/services/userApi";
import { authApi } from "@/redux/services/auth/authApi";
import { postApi } from "@/redux/services/post/postApi";

export const store = configureStore({
  reducer: {
    counterReducer,
    // Add the generated reducer as a specific top-level slice
    [authApi.reducerPath]: authApi.reducer,
    [postApi.reducerPath]: postApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    auth: authReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([authApi.middleware, userApi.middleware]),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
