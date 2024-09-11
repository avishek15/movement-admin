import { NextResponse } from "next/server";

export async function middleware(request) {
  const user = false;
  if (!user) {
    const resp = NextResponse.redirect(new URL("/AppLogin", request.url));
    return resp;
  }
  console.log("Middleware Ran");
  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
