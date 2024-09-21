// Import necessary modules
import { NextResponse } from "next/server";
import { createSessionClient } from "@/configs/appwriteConfig";
import { cookies } from "next/headers";

// Function to handle GET requests
export async function GET(request) {
  // Retrieve the session cookie from the request headers
  const sessionCookie = cookies().get("movement-session");

  try {
    // Create a session client using the session cookie value
    const { account } = await createSessionClient(sessionCookie.value);
    // Retrieve user information using the account client
    const user = await account.get();

    // Return the user information as a JSON response
    return NextResponse.json(user);
  } catch (error) {
    // Log and handle any errors that occur during user retrieval
    console.error(error);
    // Return an internal server error response in case of an error
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
