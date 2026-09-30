"use client";

import { useEffect, useState } from "react";

interface Note {
  id: number;
  title: string;
  description: string;
  author: string;
  status: "Published" | "Draft";
  createdAt: string;
}

const dummyNotes: Note[] = [
  {
    id: 1,
    title: "Project Meeting",
    description:
      "Discuss the new project requirements with the development team.",
    author: "Rana Khan",
    status: "Published",
    createdAt: "Sep 22, 2026",
  },
  {
    id: 2,
    title: "Next.js Learning",
    description: "Learn Next.js App Router, Server Components and API routes.",
    author: "John Doe",
    status: "Published",
    createdAt: "Sep 21, 2026",
  },
  {
    id: 3,
    title: "Database Design",
    description: "Create Prisma schema and define database relationships.",
    author: "Sarah Smith",
    status: "Draft",
    createdAt: "Sep 20, 2026",
  },
  {
    id: 4,
    title: "Dashboard Update",
    description:
      "Update the dashboard UI and add new note management features.",
    author: "Michael Brown",
    status: "Published",
    createdAt: "Sep 19, 2026",
  },
];

const DashboardPage = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await fetch("/api/notes");

        // API response ঠিক না হলে dummy data
        if (!response.ok) {
          setNotes(dummyNotes);
          return;
        }

        const contentType = response.headers.get("content-type");

        // JSON না হলে dummy data
        if (!contentType?.includes("application/json")) {
          setNotes(dummyNotes);
          return;
        }

        const result = await response.json();

        // API data থাকলে API data
        if (Array.isArray(result) && result.length > 0) {
          setNotes(result);
        } else {
          // API empty হলে dummy data
          setNotes(dummyNotes);
        }
      } catch (error) {
        console.error("Note API Error:", error);

        // API error হলে dummy data
        setNotes(dummyNotes);
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);

  // Loading
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="mb-6 text-2xl font-bold">Notes</h1>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="h-52 animate-pulse rounded-xl bg-gray-200"
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
        <h1 className="text-3xl font-bold text-gray-900">Notes</h1>

        <p className="mt-1 text-gray-500">Total Notes: {notes.length}</p>
      </div>

      {/* Note Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {notes.map((note) => (
          <div
            key={note.id}
            className="rounded-xl bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            {/* Title */}
            <div className="mb-4 flex items-start justify-between gap-3">
              <h2 className="text-lg font-semibold text-gray-900">
                {note.title}
              </h2>

              {/* Status */}
              <span
                className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium ${
                  note.status === "Published"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {note.status}
              </span>
            </div>

            {/* Description */}
            <p className="mb-6 line-clamp-3 text-sm leading-6 text-gray-500">
              {note.description}
            </p>

            {/* Note Info */}
            <div className="border-t pt-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-400">Author</p>

                  <p className="text-sm font-medium text-gray-800">
                    {note.author}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-xs text-gray-400">Created</p>

                  <p className="text-sm text-gray-600">{note.createdAt}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
