"use client";

import React from "react";
import LoginRegisterForm from "@/components/SignInUpForm";
import { useState, useEffect, type FormEvent } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const Register = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmpassword, setConfirmPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const fields = [
    {
      name: "username",
      label: "Username",
      type: "text",
      placeholder: "Enter your username here",
      value: username,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setUsername(e.target.value),
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter your email here",
      value: email,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setEmail(e.target.value),
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter your password here",
      value: password,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setPassword(e.target.value),
    },
    {
      name: "confirmPassword",
      label: "Confirm Password",
      type: "password",
      placeholder: "Confirm your password here",
      value: confirmpassword,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setConfirmPassword(e.target.value),
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Register
        </h1>
        {/* <LoginRegisterForm
          fields={fields}
          btnTitle="Register"
          loading={loading}
          onSubmit={handleSubmit}
        /> */}
        <div className="mt-4 flex justify-between">
          <a href="/" className="text-blue-500 hover:underline mr-4">
            Home
          </a>
          <div className="text-sm text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              Sign In
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
