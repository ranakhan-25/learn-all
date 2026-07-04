import "./App.css"
import Counter from "./components/Counter"



const App = () => {

  const INCREMENT = "increment"
  const DECREMENT = "decrement"

  const initialCounterState = {
    count: 1,
  }


  const counterReducer = (state={initialCounterState},action:any) => {
    switch (action.type) {
      case INCREMENT:
        
        return {
          ...state,
          count:state.count + 1,
        }
    
      case DECREMENT:
        
        return {
          ...state,
          count:state.count - 1,
        }
    
      default:
        return state
    }
  }

   
  
  
  return (
    <div className="text-blue-500">
      <Counter counterReducer={counterReducer} count={initialCounterState} />
    </div>
  )
}

export default App