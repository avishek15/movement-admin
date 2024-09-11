"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import LoginRegisterForm from "./SignInUpForm";
// import AuthService from "@/services/auth.service";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  //   const authService = AuthService.getInstance();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      console.error("Please fill in all fields");
      return;
    } else {
      const data = { email, password };
      setLoading(true);
      //   authService
      //     .login(data)
      //     .then((res) => {
      //       setLoading(false);
      //       console.log("Logged in Successfully!");
      //       router.push("/");
      //     })
      //     .catch((err) => {
      //       //   toast.error("Login failed, please check username and password");
      //       setLoading(false);
      //     });
    }
  };
  const fields = [
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter your email here",
      value: email,
      onChange: (e) => setEmail(e.target.value),
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter your password here",
      value: password,
      onChange: (e) => setPassword(e.target.value),
    },
  ];

  return (
    <div>
      <LoginRegisterForm
        fields={fields}
        btnTitle="Sign In"
        loading={loading}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default SignInForm;
