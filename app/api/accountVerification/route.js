import { NextResponse } from "next/server";
import { createSessionClient } from "@/configs/appwrite-config";
import { cookies } from "next/headers";

export async function GET(request) {
  const sessionCookie = cookies().get("session");
  try {
    const { account } = await createSessionClient(sessionCookie.value);
    const response = await account.createVerification(
      "http://localhost:3001/verify"
    );
    return NextResponse.json(response);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
