import Navbar from "@/components/Navbar";
import axiosInstance from "@/configs/axiosinstance";

// Define the Home component
export default async function Home() {
  const response = await axiosInstance({
    url: "http://localhost:3001/api/getDB",
    method: "get",
  });
  const { name } = response.data;
  return (
    <main className="flex-col min-h-screen items-center justify-between p-24">
      <Navbar />

      <div className="text-center mt-4">
        <h1 className="text-4xl font-bold text-white">Hello, </h1>
        <p>{name}</p>
      </div>
    </main>
  );
}
