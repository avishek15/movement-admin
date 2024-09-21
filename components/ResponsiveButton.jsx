import React from "react";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useFormStatus } from "react-dom";

const SignupButton = ({ label }) => {
  const { pending } = useFormStatus();
  // console.log("Pending state:", pending);

  return (
    <button
      type="submit"
      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      disabled={pending}
    >
      {pending ? (
        <div className="flex items-center justify-center">
          <LoadingSpinner /> <span className="ml-2">Submitting...</span>
        </div>
      ) : (
        label || ""
      )}
    </button>
  );
};

export default SignupButton;
