import React from "react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="fixed top-0 left-0 w-64 h-full bg-green-800 text-white shadow-lg z-40 pt-16">
      <div className="p-4">
        <h2 className="text-xl font-bold mb-6 text-center">Menu</h2>
        <nav className="space-y-4">
          <Link href="/my-clients">
            <div className="flex items-center p-2 rounded-md hover:bg-green-700 cursor-pointer">
              <span className="ml-2">My Clients</span>
            </div>
          </Link>
          <Link href="/all-clients">
            <div className="flex items-center p-2 rounded-md hover:bg-green-700 cursor-pointer">
              <span className="ml-2">All Clients</span>
            </div>
          </Link>
          <Link href="/settings">
            <div className="flex items-center p-2 rounded-md hover:bg-green-700 cursor-pointer">
              <span className="ml-2">Settings</span>
            </div>
          </Link>
          <Link href="/help">
            <div className="flex items-center p-2 rounded-md hover:bg-green-700 cursor-pointer">
              <span className="ml-2">Help</span>
            </div>
          </Link>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
