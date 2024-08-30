"use client";

import React, { useState, type FormEvent, useEffect, useRef } from "react";
import LoginRegisterForm from "@/components/SignInUpForm";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import AuthService from "@/services/auth.service";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const router = useRouter();
  const authService = AuthService.getInstance();
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const checkLoggedInUser = async () => {
      const cachedUser = localStorage.getItem("user");
      const expirationTime = localStorage.getItem("userExpiration");

      if (cachedUser && expirationTime) {
        const currentTime = new Date().getTime();
        const userExpirationTime = new Date(expirationTime).getTime();

        if (currentTime < userExpirationTime) {
          setIsAuthenticated(true);
          router.push("/");
          return;
        }
      }

      const user = await authService.getAccount();
      if (user) {
        setIsAuthenticated(true);
        router.push("/");
      }
    };

    checkLoggedInUser();
  }, [authService, router]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    const data = { email, password };

    setLoading(true);
    authService
      .login(data)
      .then((res: any) => {
        console.log(res);
        setLoading(false);
        toast.success("Logged in Successfully!");
        router.push("/");
      })
      .catch((err: any) => {
        console.log(err);
        toast.error("Login failed, please check username and password");
        setLoading(false);
      });
  };

  const fields = [
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
  ];

  if (isAuthenticated) {
    return null;
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
          onSubmit={handleSubmit}
        />
        <div className="mt-4 flex justify-between">
          <a href="/" className="text-blue-500 hover:underline mr-4">
            Home
          </a>
          <div className="text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <a href="/register" className="text-blue-500 hover:underline">
              Register
            </a>
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

export default Login;
