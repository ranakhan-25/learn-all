
import { Provider } from "react-redux";
import "./App.css";
import CounterView from "./app/counter/CounterView";
import { store } from "./store";


const App = () => {
  return (
    <Provider store={store}>
       <div className="">
        <CounterView />
      </div>
    </Provider>
      
  );
};

export default App;
