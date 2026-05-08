import Button from "@/components/Button";
import Image from "next/image";
import { deleteUser } from "./lib/action";

export default async function Home() {
  const res = await fetch("http://localhost:4001/api/users");
  const data = await res.json();

  return <div>
    <h1 className="text-3xl text-center font-bold text-red-500 my-2">{data.message}</h1>
    {
      data?.data?.length > 0 && data.data.map(item => {
        return <div key={item._id}>
          <div className="flex justify-between items-center bg-blue-200 my-1 py-2 px-5">
            <h1 className="flex gap-1 items-center"> <Image src={item?.image} className="rounded-full w-10 h-10" alt={item?.name} width={50} height={30}></Image><span>{item.name}</span></h1>
            <h1>{item.email}</h1>
            <Button user={item} deleteUser={deleteUser} />
          </div>
        </div>
      })
    }
  </div>;
}
