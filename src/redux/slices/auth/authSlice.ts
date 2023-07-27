import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import Cookies from "js-cookie";

interface userTypes {
  accessToken: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
}

const initialState: userTypes = {
  accessToken: "",
  refreshToken: "",
  isAuthenticated: !!Cookies.get("investing-accessToken"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: any) => {
      const { access_token, refresh_token } = action.payload;
      state.accessToken = access_token;
      state.refreshToken = refresh_token;
      state.isAuthenticated = true;
    },
    logOut: (state) => {
      state.accessToken = null;
      state.isAuthenticated = false;
      Cookies.remove("investing-accessToken");
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export const selectIsAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated;
export default authSlice.reducer;
