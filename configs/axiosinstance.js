import axios from "axios";
import { cookies } from "next/headers";

const axiosInstance = async ({ url, method }) => {
  const sessionCookie = cookies().get("session");
  const headers = {
    Cookie: sessionCookie ? `session=${sessionCookie.value}` : "",
  };
  return axios({
    url,
    method,
    headers,
  });
};

export default axiosInstance;
