"use client";

import { useState } from "react";

type Tag = {
  name: string;
  count: number;
};

const tags: Tag[] = [
  { name: "Database", count: 2 },
  { name: "Prisma", count: 2 },
  { name: "Migration", count: 1 },
  { name: "Frontend", count: 1 },
  { name: "Performance", count: 1 },
];

export default function Sidebar() {
  const [activeTag, setActiveTag] = useState("All Notes");

  return (
    <aside className="flex min-h-screen w-[255px] flex-col border-r-4 border-black bg-white px-3 py-5">
      {/* Logo */}
      <div className="mb-6 flex items-center gap-2 px-1">
        <span className="text-2xl">▤</span>

        <span className="text-lg font-black tracking-tight">
          LWS
        </span>

        <span className="border-2 border-black bg-yellow-300 px-2 py-0.5 text-lg font-black shadow-[2px_2px_0px_#000]">
          NOTEBOOK
        </span>
      </div>

      {/* User Identity */}
      <div className="mb-5 border-2 border-black bg-cyan-400 p-4 shadow-[4px_4px_0px_#000]">
        <div className="mb-2 flex items-center gap-2 text-xs font-black uppercase">
          <span>♙</span>
          <span>USER IDENTITY</span>
        </div>

        <h2 className="text-sm font-black">
          Sumit Saha
        </h2>

        <p className="mt-1 text-[11px] font-medium">
          sumit@learnwithsumit.com
        </p>
      </div>

      {/* New Note Button */}
      <button
        type="button"
        className="mb-5 flex h-11 items-center justify-center gap-2 border-2 border-black bg-green-400 text-sm font-black shadow-[4px_4px_0px_#000] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#000] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
      >
        <span className="text-xl leading-none">+</span>
        <span>NEW NOTE</span>
      </button>

      {/* Filter Title */}
      <div className="mb-2 px-1 text-[11px] font-bold uppercase tracking-wide text-gray-500">
        # FILTER BY TAG
      </div>

      {/* All Notes */}
      <button
        type="button"
        onClick={() => setActiveTag("All Notes")}
        className={`mb-2 flex h-10 w-full items-center justify-between border-2 border-black px-3 text-left text-sm font-bold transition ${
          activeTag === "All Notes"
            ? "bg-black text-white"
            : "bg-white text-black hover:bg-gray-100"
        }`}
      >
        <span className="flex items-center gap-2">
          <span>▧</span>
          <span>All Notes</span>
        </span>

        <span
          className={`flex h-5 min-w-5 items-center justify-center border border-black px-1 text-xs ${
            activeTag === "All Notes"
              ? "bg-white text-black"
              : "bg-gray-200"
          }`}
        >
          4
        </span>
      </button>

      {/* Tags */}
      <div className="space-y-2">
        {tags.map((tag) => {
          const isActive = activeTag === tag.name;

          return (
            <button
              key={tag.name}
              type="button"
              onClick={() => setActiveTag(tag.name)}
              className={`flex h-10 w-full items-center justify-between border-2 border-black px-3 text-left text-sm font-bold transition ${
                isActive
                  ? "bg-black text-white"
                  : "bg-white text-black hover:bg-gray-100"
              }`}
            >
              <span className="flex items-center gap-2">
                <span>#</span>
                <span>{tag.name}</span>
              </span>

              <span
                className={`flex h-5 min-w-5 items-center justify-center border border-black px-1 text-xs ${
                  isActive
                    ? "bg-white text-black"
                    : "bg-gray-100"
                }`}
              >
                {tag.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Bottom Avatar */}
      <div className="mt-auto pt-8">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#292929] text-sm font-bold text-white shadow-sm">
          N
        </div>
      </div>
    </aside>
  );
}