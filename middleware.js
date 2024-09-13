// Importing the necessary modules and constants
import { NextResponse } from "next/server";
import auth from "./auth";
import { SESSION_COOKIE_NAME } from "./configs/constants";

/**
 * Middleware function that is executed for each incoming request
 * @param {Request} request - The incoming request object
 * @returns {NextResponse} - Returns a response object
 */
export async function middleware(request) {
  // Get the user information using the auth module
  const user = await auth.getUser();

  // If user is not authenticated, remove session cookie and redirect to login page
  if (!user) {
    request.cookies.delete(`${SESSION_COOKIE_NAME}`);
    const resp = NextResponse.redirect(new URL("/login", request.url));
    return resp;
  }

  // Log a message indicating that the middleware ran successfully
  console.log("Middleware Ran");

  // Continue with the next middleware in the pipeline
  return NextResponse.next();
}

// Configuration object for the middleware
export const config = {
  matcher: ["/"], // Specifies the URL path that this middleware should run on
};
