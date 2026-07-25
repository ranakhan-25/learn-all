import { useDispatch } from "react-redux"
import { increment } from "../app/counter/counteSlice"

const IncrementCount = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <button className="border px-2 py-1 rounded-2xl bg-amber-100 cursor-pointer" onClick={()=>dispatch(increment())}>Increment</button>
    </div>
  )
}

export default IncrementCount