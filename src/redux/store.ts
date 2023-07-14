import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import { userApi } from "./services/userApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

import authReducer from "./slices/auth/authSlice";
import { authApi } from "./services/auth/authApi";

export const store = configureStore({
  reducer: {
    counterReducer,
    // Add the generated reducer as a specific top-level slice
    [authApi.reducerPath]: authApi.reducer,
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
