import { NextResponse } from "next/server";
import auth from "./auth";

export async function middleware(request) {
  const user = await auth.getUser();
  if (!user) {
    request.cookies.delete("session");
    const resp = NextResponse.redirect(new URL("/login", request.url));
    return resp;
  }
  console.log("Middleware Ran");
  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
