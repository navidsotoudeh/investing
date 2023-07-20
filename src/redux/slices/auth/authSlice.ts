import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

interface userTypes {
  accessToken: string | null;
  isAuthenticated: boolean;
}

const initialState: userTypes = {
  accessToken: "",
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: any) => {
      console.log("action", action);
      const { access_token, refresh_token } = action.payload;
      state.accessToken = access_token;

      state.isAuthenticated = true;
    },
    logOut: (state, action) => {
      state.accessToken = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export const selectIsAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated;
export default authSlice.reducer;