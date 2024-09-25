import React from "react";
import LoginRegisterForm from "./SignInUpForm";
import auth from "../auth";

const RegisterForm = () => {
  const loading = false;
  const fields = [
    {
      name: "firstName",
      label: "First Name",
      type: "text",
      placeholder: "Enter your first name here",
      // value: firstName,
      onChange: null,
    },
    {
      name: "lastName",
      label: "Last Name",
      type: "text",
      placeholder: "Enter your last name here",
      // value: lastName,
      onChange: null,
    },
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
    {
      name: "role",
      label: "Role",
      type: "select",
      placeholder: "Select your role",
      options: [
        { value: "clients", label: "Client" },
        { value: "trainers", label: "Trainer" },
        { value: "admins", label: "Admin" },
      ],
      // value: role,
      onChange: null,
    },
  ];

  return (
    <div>
      <LoginRegisterForm
        fields={fields}
        btnTitle="Register"
        loading={loading}
        onSubmit={auth.registerUser}
      />
    </div>
  );
};

export default RegisterForm;
