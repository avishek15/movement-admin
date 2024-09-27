"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import MyClientsTable from "@/components/MyClientsTable";
import { getCurrentUser } from "@/server_functions/auth";

const MyClients = () => {
  const [clients, setClients] = useState([]); // State to hold the clients data
  const [loading, setLoading] = useState(true); // Loading state
  const [lastId, setLastId] = useState(""); // State to hold the last ID of the fetched clients

  useEffect(() => {
    const fetchClients = async () => {
      setLoading(true); // Set loading to true before fetching data
      const current_user = await getCurrentUser();
      const userId = current_user?.$id; // Extract the $id property
      const tidsList = [userId];
      try {
        const response = await axios.get(
          `http://localhost:8000/appwrite/my-clients?tid=${userId}&lastId=${lastId}&limit=50`,
          {
            withCredentials: true, // Include cookies in the request
          }
        );
        const data = response.data;
        setClients((prevClients) => [...prevClients, ...data]); // Append new data to existing clients
        setLastId(data[data.length - 1]?.$id); // Update lastId with the ID of the last fetched client
      } catch (error) {
        console.error("Error fetching clients:", error);
      } finally {
        setLoading(false); // Set loading to false after data is fetched
      }
    };

    fetchClients();
  }, [lastId]); // Re-run the effect when lastId changes

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight
      )
        return;
      setLastId(clients[clients.length - 1]?.$id); // Update lastId when scrolled to the bottom
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [clients]);

  return (
    <div>
      <MyClientsTable clients={clients} />
    </div>
  );
};

export default MyClients;
