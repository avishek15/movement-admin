import React from "react";
import RegisterForm from "@/components/SignUpForm";
import auth from "@/auth";
import { redirect } from "next/navigation";

const page = async () => {
  // const user = await auth.getUser();

  // if (user) {
  //   redirect("/");
  // }

  return (
    <div>
      <RegisterForm />
    </div>
  );
};

export default page;
