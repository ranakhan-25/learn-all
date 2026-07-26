import { Provider } from "react-redux";
import { store } from "./store";
import BooksList from "./app/components/BooksList";

const App = () => {
  return (
    <Provider store={store}>
      <div>
      <BooksList/>
    </div>
    </Provider>
    
  );
};

export default App;
