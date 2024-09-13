// Import necessary modules and functions
import { cookies } from "next/headers";
import {
  createAdminClient,
  createSessionClient,
} from "./configs/appwriteConfig";
import { redirect } from "next/navigation";
import { SESSION_COOKIE_NAME } from "./configs/constants";

// Define auth object
const auth = {
  user: null,
  sessionCookie: null,

  // Asynchronously retrieves the user information based on the session cookie
  getUser: async () => {
    auth.sessionCookie = cookies().get(`${SESSION_COOKIE_NAME}`);
    try {
      const { account } = await createSessionClient(auth.sessionCookie.value);
      auth.user = await account.get();
    } catch (error) {
      console.error(error);
      auth.user = null;
      auth.sessionCookie = null;
    }
    return auth.user;
  },

  // Asynchronously creates a session using email and password and sets session cookie
  createSession: async (formData) => {
    "use server";
    const data = Object.fromEntries(formData);
    const { email, password } = data;
    const { account } = await createAdminClient();
    const session = await account.createEmailPasswordSession(email, password);
    cookies().set(`${SESSION_COOKIE_NAME}`, session.secret, {
      httpOnly: true,
      sameSite: "strict",
      secure: true,
      expires: new Date(session.expire),
      path: "/",
    });

    redirect("/");
  },

  // Asynchronously deletes the user session and removes the session cookie
  deleteSession: async () => {
    "use server";
    auth.sessionCookie = cookies().get(`${SESSION_COOKIE_NAME}`);
    try {
      const { account } = await createSessionClient(auth.sessionCookie.value);
      await account.deleteSession("current");
    } catch (error) {}
    cookies().delete(`${SESSION_COOKIE_NAME}`);
    auth.user = null;
    auth.sessionCookie = null;
    redirect("/login");
  },
};

// Export the auth object
export default auth;
