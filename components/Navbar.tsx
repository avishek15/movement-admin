import React from "react";
import Link from "next/link";
import auth from "../auth";

const Navbar = async () => {
  const user: any = await auth.getUser();

  return (
    <nav className="fixed top-0 left-0 w-full bg-white bg-opacity-70 shadow-md z-50">
      <div className="flex justify-between items-center p-4">
        <div className="text-xl font-bold text-green-700 hover:text-green-900">
          {/* Placeholder for logo */}
          <Link href="/">
            <span>Logo</span>
          </Link>
        </div>
        <div className="flex space-x-4">
          {user ? (
            <>
              <span className="text-green-700">
                Hello, <strong> {user.name} </strong>
              </span>
              <form
                action={auth.deleteSession}
                className="cursor-pointer text-green-700 hover:text-green-900"
              >
                <button>Logout</button>
              </form>
            </>
          ) : (
            <>
              {/* <Link href="/register">
                <span className="cursor-pointer text-green-700 hover:text-green-900">
                  Register
                </span>
              </Link> */}
              {/* <Link href="/login">
                <span className="cursor-pointer text-green-700 hover:text-green-900">
                  Login
                </span>
              </Link> */}
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
