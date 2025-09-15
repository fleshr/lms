import { getUser } from "@/entities/auth";
import { routes } from "@/shared/config/routes";
import { NextRequest, NextResponse } from "next/server";

export const middleware = async (request: NextRequest) => {
  const user = await getUser();

  if (!user && ["/dashboard", "/settings"].includes(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL(routes.login, request.url));
  }

  if (user && ["/login", "/register"].includes(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL(routes.main, request.url));
  }

  return NextResponse.next();
};

export const config = {
  runtime: "nodejs",
  matcher: ["/dashboard", "/settings", "/login", "/register"],
};
