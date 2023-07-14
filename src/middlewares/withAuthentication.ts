"use client";
import type { NextRequest } from "next/server";
import { store } from "@/redux/store";
import { NextFetchEvent, NextResponse } from "next/server";
import { MiddlewareFactory } from "@/middlewares/types";
import { cookies } from "next/headers";
import { selectIsAuthenticated } from "@/redux/slices/auth/authSlice";
// import jwt from 'jsonwebtoken'

// function isTokenExpired(token: string) {
//   const decoded = jwt.decode(token)
//   const now = Date.now() / 1000
//   return decoded && decoded.exp && decoded.exp < now
// }

export const withAuthentication: MiddlewareFactory = (next) => {
  return async (request: NextRequest, _next: NextFetchEvent) => {
    // const isAuthenticated = useSelector(selectIsAuthenticated);
    const isAuthenticated = store.getState().auth.isAuthenticated;
    console.log("isAuthenticated", isAuthenticated);
    // const token = request.cookies.get("notesapp-accessToken")?.value ?? "";

    if (request.url.includes("/profile") && !isAuthenticated) {
      return NextResponse.redirect(
        new URL(`/login?backUrl=/profile`, request.url)
      );
    }
  };
};

export const config = {
  matcher: ["/profile"],
};
