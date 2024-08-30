import { Client } from "appwrite";

const client = new Client();

if (!process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT) {
  throw new Error(
    "Environment variable NEXT_PUBLIC_APPWRITE_ENDPOINT is not defined"
  );
}

if (!process.env.NEXT_PUBLIC_PROJECT_ID) {
  throw new Error("Environment variable NEXT_PUBLIC_PROJECT_ID is not defined");
}

client
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
  .setProject(process.env.NEXT_PUBLIC_PROJECT_ID);

export default client;

// export const account = new Account(client);
// export { ID } from "appwrite";
