// Importing axios library for making HTTP requests
import axios from "axios";
// Importing the cookies function and headers object from the "next/headers" module
import { cookies } from "next/headers";
// Importing the SESSION_COOKIE_NAME constant from the "./constants" file
import { SESSION_COOKIE_NAME } from "./constants";

// Function that creates an axios instance with a specified URL and HTTP method
const axiosInstance = async ({ url, method }) => {
  // Get the session cookie value from the cookies
  const sessionCookie = cookies().get(`${SESSION_COOKIE_NAME}`);

  // Set the headers object with the session cookie value, if available
  const headers = {
    Cookie: sessionCookie
      ? `${SESSION_COOKIE_NAME}=${sessionCookie.value}`
      : "",
  };

  // Make a request using axios with the specified URL, method, and headers
  return axios({
    url,
    method,
    headers,
  });
};

// Exporting the axiosInstance function as the default export
export default axiosInstance;
