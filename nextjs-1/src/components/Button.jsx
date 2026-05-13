"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Button = ({ deleteUser, user }) => {

  const router = useRouter()
  

  const handelDelete = async (id) => {
    await deleteUser(id)
    router.refresh()
  }


  return (
    <div className="flex gap-3">
      <Link href={`/details/${user._id}`} className="bg-amber-200 px-4 py-1 rounded-2xl text-purple-600">
        Details
      </Link>
      <Link href={`/updata/${user._id}`} className="bg-pink-200 px-4 py-1 rounded-2xl text-purple-600">
        edit
      </Link>
      <button onClick={()=>handelDelete(user._id)} className="bg-red-200 px-4 py-1 rounded-2xl text-purple-600">
        delete
      </button>
    </div>
  );
};

export default Button;
