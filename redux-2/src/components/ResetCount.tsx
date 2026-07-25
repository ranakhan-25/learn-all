import { useDispatch } from "react-redux"
import { reset } from "../app/counter/counteSlice"

const ResetCount = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <button className="border py-1 px-2 rounded-2xl bg-amber-500 cursor-pointer" onClick={()=>dispatch(reset())}>ResetCount</button>
    </div>
  )
}

export default ResetCount