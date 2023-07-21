import type { NextRequest } from "next/server";
import { NextFetchEvent, NextResponse } from "next/server";
import { MiddlewareFactory } from "@/middlewares/types";
import { verifyToken } from "../utils/authUtils";
import Cookies from "js-cookie";

// function isTokenExpired(token: string) {
//   const decoded = jwt.decode(token)
//   const now = Date.now() / 1000
//   return decoded && decoded.exp && decoded.exp < now
// }

export const withAuthentication: MiddlewareFactory = (next) => {
  return async (request: NextRequest, _next: NextFetchEvent) => {
    const token = Cookies.get("investing-accessToken");

    // if (request.url.includes("/profile") && !verifyToken(token)) {
    //   console.log("18");
    //   return NextResponse.redirect(
    //     new URL(`/login?backUrl=/profile`, request.url)
    //   );
    // }
  };
};

export const config = {
  matcher: ["/profile"],
};
