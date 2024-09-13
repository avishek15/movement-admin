// Import the Image component from Next.js
import Navbar from "@/components/Navbar"; // Import the Navbar component from the components folder
import Link from "next/link"; // Import the Link component from Next.js
import axiosInstance from "@/configs/axiosinstance"; // Import the axios instance for making API requests
// Define the Home component
// This is the main component that represents the homepage of the application
export default async function Home() {
  // Make an asynchronous API request to fetch the name
  const response = await axiosInstance({
    url: "http://localhost:3001/api/get-name",
    method: "get",
  });
  const { name } = response.data; // Destructure the name from the response data
  return (
    // Main container with flexbox layout, minimum height of the screen, centered content, and padding
    <main className="flex-col min-h-screen items-center justify-between p-24">
      <Navbar />
      {/* // Render the Navbar component */}
      <div className="text-center mt-4">
        {/* Heading with large font size, bold style, and black color */}
        <h1 className="text-4xl font-bold text-white">Hello, {name}</h1>
        {/* // Display a greeting message with the fetched name */}
        <h1 className="text-4xl font-bold text-black">My Clients</h1>
        {/* // Display a heading for the client section */}
        <Link href="/my-clients">
          {/* // Link to the My Clients page */}
          <p>My Clients</p>
        </Link>
        <Link href="/all-clients">
          {/* // Link to the All Clients page */}
          <p>All Clients</p>
        </Link>
        <Link href="/settings">
          {/* // Link to the Settings page */}
          <p>Settings</p>
        </Link>
        <Link href="/logout">
          {/* // Link to log out of the application */}
          <p>Logout</p>
        </Link>

        {/* Subheading with medium font size, regular style, and gray color */}
      </div>
    </main>
  );
}
