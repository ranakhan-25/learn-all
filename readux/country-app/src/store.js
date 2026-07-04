import {createStore} from "redux";
import countReducer from "./service/reducers/countReducer";

const store = createStore(countReducer);
export default store;
