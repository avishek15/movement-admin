"use client";
import { Client, Account } from "appwrite";
import { useEffect } from "react";

const client = new Client().setProject(process.env.NEXT_PUBLIC_PROJECT_ID); // Your project ID

const account = new Account(client);

const VerifyPage = () => {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const secret = urlParams.get("secret");
    const userId = urlParams.get("userId");

    if (secret && userId) {
      const promise = account.updateVerification(userId, secret);

      promise.then(
        function (response) {
          console.log(response); // Success
        },
        function (error) {
          console.log(error); // Failure
        }
      );
    }
  }, []);

  return (
    <div>
      <h1>Account Verification</h1>
      <p>Please wait while we verify your account...</p>
    </div>
  );
};

export default VerifyPage;
