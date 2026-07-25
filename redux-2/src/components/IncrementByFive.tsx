import { useDispatch } from "react-redux"
import { incrementByFive } from "../app/counter/counteSlice"

const IncrementByFive = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <button className="border py-1 px-2 rounded-2xl bg-blue-200" onClick={()=>dispatch(incrementByFive(5))}>IncrementByFive</button>
    </div>
  )
}

export default IncrementByFive