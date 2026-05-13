import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const deleteUser = async (userId) => {
  "use server";
  const res = await fetch(`http://localhost:4001/api/users/${userId}`, {
    method: "DELETE",
  });
  const data = await res.json();
  if (data.deletedCount > 0) {
    revalidatePath("/");
  }
  return data;
};

export const getUser = async (id) => {
  const res = await fetch(`http://localhost:4001/api/users/${id}`);
  const data = await res.json();
  return data.data;
};

export const updateUser = async (fromData, userId) => {
  "use server";
  const userData = Object.fromEntries(fromData.entries());

  const res = await fetch(`http://localhost:4001/api/users/${userId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  const data = await res.json();
  if (data.status === 200) {
    revalidatePath("/");
    redirect("/");
  }
  return data;
};
