"use client";
// import Navbar from "@/components/Navbar";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ToastContainer } from "react-toastify";

export default function AllClients() {
  const [search, setSearch] = useState("");
  const clients = [
    {
      uid: "1",
      name: "John Doe",
      email: "johndoe@gmail.com",
      phone: "123-456-7890",
      trainer_id: 123,
      trainer_name: "Jane Smith",
    },
    {
      uid: "2",
      name: "Jane Smith",
      email: "janesmith@gmail.com",
      phone: "234-567-8901",
      trainer_id: 234,
      trainer_name: "John Doe",
    },
  ];

  const filteredClients = useMemo(() => {
    return clients.filter((client) => {
      return (
        client.name.toLowerCase().includes(search.toLowerCase()) ||
        client.email.toLowerCase().includes(search.toLowerCase()) ||
        client.phone.toLowerCase().includes(search.toLowerCase())
      );
    });
  }, [search]);

  return (
    // Main container with flexbox layout, minimum height of the screen, centered content, and padding
    <main className="flex-col min-h-screen items-center justify-between p-24 bg-white text-black">
      <ToastContainer />
      {/* <Navbar /> */}

      <div className="text-center mt-4 flex flex-col items-center gap-8">
        {/* Heading with large font size, bold style, and black color */}
        {/* <h1 className="text-4xl font-bold text-white">Hello World</h1> */}
        <div
          style={{
            border: "1px solid gray",
            borderRadius: 200,
            overflow: "hidden",
            height: 48,
            width: 600,
            padding: "0px 20px",
          }}
        >
          <input
            className="w-full h-full"
            value={search}
            onChange={(e) => {
              console.log(e.target.value);
              setSearch(e.target.value);
            }}
          />
        </div>
        <h1 className="text-4xl font-bold text-black">My Clients</h1>
        <table style={{ textAlign: "left" }}>
          <tr
            style={{
              gap: 12,
              backgroundColor: "#006847",
              color: "white",
            }}
          >
            <th
              style={{
                fontWeight: "normal",
                minWidth: "200px",
                paddingLeft: "20px",
                height: 48,
              }}
            >
              Client Name
            </th>
            <th style={{ fontWeight: "normal", minWidth: "200px" }}>Email</th>
            <th style={{ fontWeight: "normal", minWidth: "200px" }}>
              Phone Number
            </th>
            <th style={{ fontWeight: "normal", minWidth: "200px" }}>
              Trainer Name
            </th>
            <th style={{ fontWeight: "normal", minWidth: "200px" }}></th>
          </tr>
          {filteredClients.map((client: any, index: number) => (
            <tr
              key={client.uid}
              style={{
                backgroundColor: index % 2 ? "#eee" : "#fff",
                height: 48,
              }}
            >
              <td
                style={{
                  paddingLeft: "20px",
                }}
              >
                {client.name}
              </td>
              <td>{client.email}</td>
              <td>{client.phone}</td>
              <td>{client.trainer_name}</td>
              <td>
                <Link href={`client/${client.uid}`}>
                  <p>View Details</p>
                </Link>
              </td>
            </tr>
          ))}
        </table>
        {/* Subheading with medium font size, regular style, and gray color */}
      </div>
    </main>
  );
}
