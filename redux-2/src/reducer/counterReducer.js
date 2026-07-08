import { DECREMENT, INCREMENT } from "../action/count";
const initialState = {
  count: 0,
};

export const counterReducer = (state = { initialState }, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: count - 1,
      };
    default:
      return state;
  }
};
