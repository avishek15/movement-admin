import { NextResponse } from "next/server";
import { createSessionClient } from "@/configs/appwrite-config";
import { cookies } from "next/headers";

export async function GET(request) {
  const sessionCookie = cookies().get("session");
  try {
    const { database } = await createSessionClient(sessionCookie.value);

    // const { database } = await account.database();
    const { documents } = await database.listDocuments(
      process.env.NEXT_PUBLIC_DATABASE_ID,
      process.env.NEXT_PUBLIC_COLLECTION_USERS
    );

    return NextResponse.json({ name: documents[0]["Name"] });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
