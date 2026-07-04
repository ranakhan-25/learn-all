

import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, reset } from "../service/actions/countAction"

const Counter = () => {
  const count = useSelector(state=>state.count)
  const dispatch = useDispatch()
  
  
  const handelIncrement = () => {
    dispatch(increment())
  }
  const handelDecrement = () => {
    dispatch(decrement())
  }
  const handelReset = () => {
    dispatch(reset())
    
  }


  return (
    <div>
     <h2>Counter App</h2>
    <h3>Count: {count}</h3>
      <button className="border m-2 p-2" onClick={handelIncrement}>Increment</button>
      <br />
      <button className="border m-2 p-2"  onClick={handelDecrement}>Decrement</button>
      <br />
     <button className="border m-2 p-2"  onClick={handelReset}>Reset</button>
    </div>
  )
}

export default Counter