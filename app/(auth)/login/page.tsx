import React from "react";
import LoginRegisterForm from "@/components/SignInUpForm";
import auth from "@/auth";
import { redirect } from "next/navigation";

const page = async () => {
  const loading = false;

  const fields = [
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter your email here",
      // value: email,
      onChange: null,
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter your password here",
      // value: password,
      onChange: null,
    },
  ];
  const user = await auth.getUser();

  if (user) {
    redirect("/");
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Sign In
        </h1>
        <LoginRegisterForm
          fields={fields}
          btnTitle="Sign In"
          loading={loading}
          onSubmit={auth.createSession}
        />
        <div className="mt-4 flex justify-between">
          {/* <a href="/" className="text-blue-500 hover:underline mr-4">
            Home
          </a> */}
          {/* <div></div> */}
          <div className="text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            {/* <a href="/register" className="text-blue-500 hover:underline"> */}
            Register through Admin
            {/* </a> */}
          </div>
        </div>
        <div className="mt-4 text-center">
          <a href="/forgot-password" className="text-blue-500 hover:underline">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default page;
