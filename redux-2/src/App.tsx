import { Provider } from "react-redux";
import "./App.css";
import Counter from "./components/Counter";
import store from './store'

const App = () => {
  return (
    <Provider store={store}>
      <div className="text-blue-500">
        <Counter />
      </div>
    </Provider>
  );
};

export default App;
