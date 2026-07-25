import { useDispatch } from "react-redux"
import { decrement } from "../app/counter/counteSlice"

const DecrementCount = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <button className="border px-2 py-1 rounded-2xl bg-red-100 cursor-pointer" onClick={()=>dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default DecrementCount