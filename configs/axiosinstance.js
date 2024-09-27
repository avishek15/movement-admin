// Importing axios library for making HTTP requests
import axios from "axios";
// Importing the cookies function and headers object from the "next/headers" module
import { cookies } from "next/headers";
// Importing the SESSION_COOKIE_NAME constant from the "./constants" file
import { SESSION_COOKIE_NAME } from "./constants";
import { redirect } from "next/navigation"; // Import the redirect function

// Function that creates an axios instance with a specified URL, HTTP method, and optional body
const axiosInstance = async ({ url, method, body = undefined }) => {
  try {
    // Get the session cookie value from the cookies
    const sessionCookie = cookies().get(`${SESSION_COOKIE_NAME}`);

    // Set the headers object with the session cookie value, if available
    const headers = {
      Cookie: sessionCookie
        ? `${SESSION_COOKIE_NAME}=${sessionCookie.value}`
        : "",
    };

    // Make a request using axios with the specified URL, method, headers, and body
    const response = await axios({
      url,
      method,
      headers,
      data: body, // Use 'data' for POST requests and 'params' for GET requests
      params: method === "GET" ? body : undefined, // Use 'params' for GET requests
    });

    return response;
  } catch (error) {
    console.error("Error:", error);

    // Check if the error is due to a 500 status code
    if (error.response && error.response.status === 500) {
      redirect("/login"); // Redirect to the login page
    }

    // Rethrow the error to be handled by
    // the caller if needed
    throw error;
  }
};

// Exporting the axiosInstance function
// as the default export
export default axiosInstance;
