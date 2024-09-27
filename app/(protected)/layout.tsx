import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <div className="flex flex-col h-screen">
        <div className="flex flex-1 flex-row">
          <Sidebar />
          <main className="flex-1 bg-gray-100">{children}</main>
        </div>
      </div>
    </main>
  );
}
