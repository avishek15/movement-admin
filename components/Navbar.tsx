"use client";

import React from "react";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import AuthService from "@/services/auth.service";

const Navbar = () => {
  const [user, setUser] = useState<any>(null);
  const authService = AuthService.getInstance();

  const fetchUser = useCallback(async () => {
    const cachedUser = localStorage.getItem("user");
    const expirationTime = localStorage.getItem("userExpiration");

    if (cachedUser && expirationTime) {
      const now = new Date().getTime();
      if (now < parseInt(expirationTime, 10)) {
        setUser(JSON.parse(cachedUser));
        return;
      } else {
        localStorage.removeItem("user");
        localStorage.removeItem("userExpiration");
      }
    }

    const loggedUser = await authService.getAccount();
    // const loggedUser = null;
    setUser(loggedUser || null);
    if (loggedUser) {
      localStorage.setItem("user", JSON.stringify(loggedUser));
      const expiration = new Date().getTime() + 3600000; // 1 hour from now
      localStorage.setItem("userExpiration", expiration.toString());
    }
  }, [authService]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const handleLogout = async () => {
    await authService.logout();
    setUser(null);
    localStorage.removeItem("user"); // Clear the cached user data
    localStorage.removeItem("userExpiration"); // Clear the expiration time
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white bg-opacity-70 shadow-md z-50">
      <div className="flex justify-between items-center p-4">
        <div className="text-xl font-bold text-green-700 hover:text-green-900">
          {/* Placeholder for logo */}
          <Link href="/">
            <span>Logo</span>
          </Link>
        </div>
        <div className="hidden sm:flex space-x-4">
          {user ? (
            <>
              <span className="text-green-700">
                Hello, <strong>{user.name}</strong>
              </span>
              <span
                onClick={handleLogout}
                className="cursor-pointer text-green-700 hover:text-green-900"
              >
                Logout
              </span>
            </>
          ) : (
            <>
              <Link href="/register">
                <span className="cursor-pointer text-green-700 hover:text-green-900">
                  Register
                </span>
              </Link>
              <Link href="/login">
                <span className="cursor-pointer text-green-700 hover:text-green-900">
                  Login
                </span>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
