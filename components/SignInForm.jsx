import React from "react";
import LoginRegisterForm from "./SignInUpForm";
import auth from "../auth";

const SignInForm = () => {
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

  return (
    <div>
      <LoginRegisterForm
        fields={fields}
        btnTitle="Sign In"
        loading={loading}
        onSubmit={auth.createSession}
      />
    </div>
  );
};

export default SignInForm;
