"use client";

import React, { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: "Active" | "Inactive";
  avatar?: string;
}

// API কাজ না করলে এই data দেখাবে
const dummyUsers: User[] = [
  {
    id: 1,
    name: "Rana Khan",
    email: "rana@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 2,
    name: "John Doe",
    email: "john@example.com",
    role: "User",
    status: "Active",
  },
  {
    id: 3,
    name: "Sarah Smith",
    email: "sarah@example.com",
    role: "Manager",
    status: "Inactive",
  },
  {
    id: 4,
    name: "Michael Brown",
    email: "michael@example.com",
    role: "User",
    status: "Active",
  },
];

const DashboardPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("/api/users");

        // API response ঠিক না হলে dummy data
        if (!response.ok) {
          setUsers(dummyUsers);
          return;
        }

        // JSON কিনা check
        const contentType = response.headers.get("content-type");

        if (!contentType?.includes("application/json")) {
          setUsers(dummyUsers);
          return;
        }

        const result = await response.json();

        // API data থাকলে API data
        if (Array.isArray(result) && result.length > 0) {
          setUsers(result);
        } else {
          // API empty হলে dummy data
          setUsers(dummyUsers);
        }
      } catch (error) {
        console.error("User API Error:", error);

        // API error হলে dummy data
        setUsers(dummyUsers);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Loading
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="mb-6 text-2xl font-bold">Users</h1>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="h-48 animate-pulse rounded-xl bg-gray-200"
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Users</h1>

        <p className="mt-1 text-gray-500">Total Users: {users.length}</p>
      </div>

      {/* User Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="rounded-xl bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            {/* User Avatar + Name */}
            <div className="mb-5 flex items-center gap-4">
              {user.avatar ? (
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="h-14 w-14 rounded-full object-cover"
                />
              ) : (
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xl font-bold text-blue-600">
                  {user.name.charAt(0).toUpperCase()}
                </div>
              )}

              <div className="min-w-0">
                <h2 className="truncate text-lg font-semibold text-gray-900">
                  {user.name}
                </h2>

                <p className="truncate text-sm text-gray-500">{user.email}</p>
              </div>
            </div>

            {/* User Details */}
            <div className="space-y-3 border-t pt-4">
              {/* Role */}
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Role</span>

                <span className="text-sm font-medium text-gray-900">
                  {user.role}
                </span>
              </div>

              {/* Status */}
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Status</span>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    user.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {user.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
