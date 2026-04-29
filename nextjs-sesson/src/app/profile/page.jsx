"use client";
import { useSession } from "@/lib/auth-client";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";

const ProfilePage = () => {
  const { data, isPending } = useSession();
  if (isPending) {
    return (
      <p className="text-2xl font-medium text-red-500 text-center my-10">
        Loading...
      </p>
    );
  }
  const user = data?.user;

  console.log(user);
  return (
    <div className="flex items-center justify-center my-5 ">
      {user && (
        <div className="flex items-center gap-5">
          <div>
            <Image
              src={user?.image}
              width={100}
              height={100}
              className="rounded-full"
              alt="image"
            ></Image>
          </div>
          <div>
            <h1>
              <span className="text-blue-500 font-bold">User Name:</span>{" "}
              {user.name}
            </h1>
            <h1>
              <span className="text-blue-500 font-bold">User Email:</span>{" "}
              {user.email}
            </h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
