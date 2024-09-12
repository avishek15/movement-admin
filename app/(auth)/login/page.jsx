import React from "react";
import SignInForm from "@/components/SignInForm";
import auth from "@/auth";
import { redirect } from "next/navigation";

const page = async () => {
  const user = await auth.getUser();

  if (user) {
    redirect("/");
  }

  return (
    <div>
      <SignInForm />
    </div>
  );
};

export default page;
