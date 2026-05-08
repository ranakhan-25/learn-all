import Image from "next/image";

const DetailsPage = async({ params }) => {
  const { id } = await params;
  console.log(id)
  const res = await fetch(`http://localhost:4001/api/users/${id}`)
  const data = await res.json()

  const user = data?.data;
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md">
        
        <div className="flex flex-col items-center">
          <Image 
            width={50}
            height={50}
            src={user.image}
            alt={user.name}
            className="w-28 h-28 rounded-full object-cover border"
          />

          <h1 className="text-2xl font-bold mt-4">{user.name}</h1>
          <p className="text-gray-500">{user.email}</p>
        </div>

        <div className="mt-6 space-y-2 text-sm">
          <p><span className="font-semibold">Phone:</span> {user.phone}</p>
          <p><span className="font-semibold">Admin:</span> {user.isAdmin ? "Yes" : "No"}</p>
          <p><span className="font-semibold">Banned:</span> {user.isBanned ? "Yes" : "No"}</p>
          <p><span className="font-semibold">Created:</span> {new Date(user.createdAt).toLocaleString()}</p>
          <p><span className="font-semibold">Updated:</span> {new Date(user.updatedAt).toLocaleString()}</p>
        </div>

        <div className="mt-4 text-xs text-gray-400 break-all">
          ID: {user._id}
        </div>

      </div>
    </div>
  )
}

export default DetailsPage