// Import the Image component from Next.js
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { ToastContainer } from "react-toastify";

// Define the Home component
export default function Home() {
  return (
    // Main container with flexbox layout, minimum height of the screen, centered content, and padding
    <main className="flex-col min-h-screen items-center justify-between p-24">
      <ToastContainer />
      <Navbar />

      <div className="text-center mt-4">
        {/* Heading with large font size, bold style, and black color */}
        {/* <h1 className="text-4xl font-bold text-white">Hello World</h1> */}
        <h1 className="text-4xl font-bold text-black">My Clients</h1>
        <Link href="/my-clients">
          <p>My Clients</p>
        </Link>
        <Link href="/all-clients">
          <p>All Clients</p>
        </Link>
        <Link href="/settings">
          <p>Settings</p>
        </Link>
        <Link href="/logout">
          <p>Logout</p>
        </Link>

        {/* Subheading with medium font size, regular style, and gray color */}
      </div>
    </main>
  );
}
