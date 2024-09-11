import { NextResponse } from "next/server";
import { createSessionCLient } from "@/configs/appwrite-config";
import { cookies } from "next/headers";

export async function GET(request) {
  const sessionCookie = cookies().get("session");
  try {
    const { account } = await createSessionCLient(sessionCookie.value);
    console.log(account);
    return NextResponse.json({
      message: "GET from Server",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    console.log(request);

    return NextResponse.json({
      message: "POST from Server",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
