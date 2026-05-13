import { getUser, updateUser } from "@/app/lib/action";

const EditUserPage = async ({ params }) => {
  const { id } = await params;
  const user = await getUser(id)
  
  const updateUserWrapper = async(formData) => {
    "use server"
    return updateUser(formData,id)
  }
  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-xl">
      <h1 className="text-3xl font-bold mb-6 text-center">Edit User</h1>
      <form action={updateUserWrapper} className="space-y-4">
        {/* name */}
        <input
          type="text"
          name="name"
          defaultValue={user?.name}
          placeholder="Enter Name"
          className="w-full border p-3 rounded-lg"
        />

        {/* phone */}
        <input
          type="text"
          name="phone"
          defaultValue={user?.phone}
          placeholder="Enter Phone"
          className="w-full border p-3 rounded-lg"
        />

        {/* image */}
        <input
          type="text"
          name="image"
          defaultValue={user?.image}
          placeholder="Enter Image URL"
          className="w-full border p-3 rounded-lg"
        />

        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-lg"
        >
          Update User
        </button>
      </form>
    </div>
  );
};

export default EditUserPage;
