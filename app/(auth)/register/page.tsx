"use client";

import React from "react";
import LoginRegisterForm from "@/components/SignInUpForm";
import { useState, useEffect, type FormEvent } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import AuthService from "@/services/auth.service";

const Register = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmpassword, setConfirmPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const authService = AuthService.getInstance();

  useEffect(() => {
    const checkLoggedInUser = async () => {
      try {
        const user = await authService.getAccount();
        if (user) {
          router.push("/");
        }
      } catch (error) {
        if (error instanceof Error && error.message.includes("missing scope")) {
          console.log("Guest user does not have the necessary permissions.");
        } else {
          console.error(
            "An error occurred while checking the logged-in user:",
            error
          );
        }
      }
    };
    checkLoggedInUser();
  }, [authService, router]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!username || !email || !password || !confirmpassword) {
      toast.error("Please fill in all fields");
      return;
    }

    if (password !== confirmpassword) {
      toast.error("Passwords do not match");
      return;
    }

    const data = {
      username,
      email,
      password,
      confirmpassword,
    };

    // alert(`1. ${JSON.stringify(data)}`);
    setLoading(true);

    try {
      await authService.register(data);
      toast.success("Registration successful!");
      router.push("/login"); // Redirect to login page or another appropriate page
    } catch (error) {
      if (error instanceof Error) {
        if (error.message.includes("Invalid `password` param")) {
          toast.error(
            "Invalid password. Password must be between 8 and 265 characters long, and should not be one of the commonly used passwords."
          );
        } else if (error.message.includes("Invalid `name` param")) {
          toast.error(
            "Invalid name. Name must be a valid string, at least 1 character, and no longer than 128 characters."
          );
        } else if (error.message.includes("Invalid `email`")) {
          toast.error("Invalid email. Please provide a valid email address.");
        } else {
          toast.error(error.message);
        }
      } else {
        toast.error("An unexpected error occurred. Please try again.");
      }
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

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
        <LoginRegisterForm
          fields={fields}
          btnTitle="Register"
          loading={loading}
          onSubmit={handleSubmit}
        />
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
