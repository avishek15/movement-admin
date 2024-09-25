import { cookies } from "next/headers";
import {
  createAdminClient,
  createSessionClient,
} from "./configs/appwrite-config";
import { redirect } from "next/navigation";
import { ID, Query } from "node-appwrite";

const auth = {
  user: null,
  sessionCookie: null,

  getUser: async () => {
    auth.sessionCookie = cookies().get("session");
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

  createSession: async (formData) => {
    "use server";
    const data = Object.fromEntries(formData);
    const { email, password } = data;
    const { account } = await createAdminClient();
    // const userObject = await users.list([Query.equal("email", email)]);
    // console.log(userObject);
    const session = await account.createEmailPasswordSession(email, password);
    cookies().set("session", session.secret, {
      httpOnly: true,
      sameSite: "strict",
      secure: true,
      expires: new Date(session.expire),
      path: "/",
    });
    // auth.sessionCookie = cookies().get("session");
    // const {
    //   account: sessAcc,
    //   users: sessUser,
    //   teams: sessTeam,
    // } = await createSessionClient(auth.sessionCookie.value);

    // const teamMember = await sessTeam.list();

    // console.log(teamMember.teams[0].name);

    // await sessAcc.deleteSession("current");
    // cookies().delete("session");
    // auth.user = null;
    // auth.sessionCookie = null;

    redirect("/");
  },

  registerUser: async (formData) => {
    "use server";
    const data = Object.fromEntries(formData);

    const { firstName, lastName, email, password, role } = data;
    const { account, database, users, teams } = await createAdminClient();
    const session = await account.create(
      ID.unique(),
      email,
      password,
      `${firstName} ${lastName}`
    );
    // console.log(typeof role);
    const matched_team = await teams.list([Query.equal("name", role)]);
    const team_id = matched_team.teams[0].$id;

    await teams.createMembership(team_id, [role], email, session.$id);

    await database.createDocument(
      process.env.NEXT_PUBLIC_DATABASE_ID,
      role === "clients"
        ? process.env.NEXT_PUBLIC_COLLECTION_USERS
        : process.env.NEXT_PUBLIC_COLLECTION_TRAINERS,
      ID.unique(),
      {
        auth_id: session.$id,
        firstName: firstName,
        lastName: lastName,
      }
    );

    // cookies().set("session", session.secret, {
    //   httpOnly: true,
    //   sameSite: "strict",
    //   secure: true,
    //   expires: new Date(session.expire),
    //   path: "/",
    // });

    // redirect("/");
  },

  deleteSession: async () => {
    "use server";
    auth.sessionCookie = cookies().get("session");
    try {
      const { account } = await createSessionClient(auth.sessionCookie.value);
      await account.deleteSession("current");
    } catch (error) {}
    cookies().delete("session");
    auth.user = null;
    auth.sessionCookie = null;
    redirect("/login");
  },
};

export default auth;
