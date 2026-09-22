import { redirect } from "next/navigation"

const page = () => {


  redirect('/login')


  return (
    <div>
     hello world
    </div>
  )
}

export default page