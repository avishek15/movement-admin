"use client";
import Link from "next/link";
import { useMemo, useState } from "react";

export default function MyClients() {
  const [search, setSearch] = useState("");

  const filteredClients = useMemo(() => {
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

    return clients.filter((client) => {
      return (
        client.name.toLowerCase().includes(search.toLowerCase()) ||
        client.email.toLowerCase().includes(search.toLowerCase()) ||
        client.phone.toLowerCase().includes(search.toLowerCase())
      );
    });
  }, [search]);

  return (
    <main className="flex flex-col min-h-screen items-center justify-between p-24 bg-white text-black">
      <div className="text-center mt-4 flex flex-col items-center gap-8">
        <div className="border border-gray-400 rounded-full overflow-hidden h-12 w-600 px-5">
          <input
            className="w-full h-full"
            value={search}
            placeholder="Search clients by name, email, or phone"
            onChange={(e) => {
              console.log(e.target.value);
              setSearch(e.target.value);
            }}
          />
        </div>
        <h1 className="text-4xl font-bold text-black">My Clients</h1>
        <table className="text-left">
          <tbody>
            <tr className="gap-3 bg-green-800 text-white">
              <th className="font-normal min-w-200 pl-5 h-12">Client Name</th>
              <th className="font-normal min-w-200">Email</th>
              <th className="font-normal min-w-200">Phone Number</th>
              <th className="font-normal min-w-200">Trainer Name</th>
              <th className="font-normal min-w-200"></th>
            </tr>
            {filteredClients.map((client: any, index: number) => (
              <tr
                key={client.uid}
                className={`${index % 2 ? "bg-gray-200" : "bg-white"} h-12`}
              >
                <td className="pl-5">{client.name}</td>
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
          </tbody>
        </table>
      </div>
    </main>
  );
}
