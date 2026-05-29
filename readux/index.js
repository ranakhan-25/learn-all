// const { createStore } = require("redux");
// const INCREMENT = "INCREMENT";
// const DECREMENT = "DECREMENT";
// const ADD_USER = "ADD_USER";

// const { createStore, applyMiddleware } = require("redux");
// const {logger} = require("redux-logger")

// // const initialValue = {
// //   count: 0,
// //   user:[{name:"rana"}]
// // }
// // const increment = () => {
// //   return {
// //     type:INCREMENT,
// //   }
// // }
// // const decrement = () => {
// //   return {
// //     type:DECREMENT,
// //   }
// // }
// // const addUser = (value) => {
// //   return {
// //     type: ADD_USER,
// //     payload:value
// //   }
// // }

// // const counterAction = (state=initialValue,action) => {
// //   switch (action.type) {
// //     case INCREMENT: {
// //       return {
// //         ...state,
// //         count:state.count + 1
// //       }
// //     }
// //     case DECREMENT: {
// //       return {
// //         ...state,
// //         count:state.count - 1
// //       }
// //     }
// //     case ADD_USER: {
// //       return {
// //         ...state,
// //         count: state.count + 1,
// //         user:[...state.user,action.payload]
// //       }
// //     }

// //     default:
// //       state
// //   }
// // }

// // const store = createStore(counterAction);

// // store.subscribe(() => {
// //   console.log(store.getState())
// // })

// // store.dispatch(increment())
// // store.dispatch(addUser({name:"atike"}))

// const get_product = "GET_PRODUCT";
// const add_product = "ADD_PRODUCT";

// const initialProductState = {
//   products: ["sugar", "salt"],
//   numberOfProduct:2,
// }

// const getProduct = () => {
//   return {
//     type:get_product,
//   }
// }
// const addProduct = (value) => {
//   return {
//     type: add_product,
//     payload:value
//   }
// }

// const productReducer = (state=initialProductState,action) => {
//   switch (action.type) {
//     case get_product: {
//       return {
//         ...state
//       }
//     }
//     case add_product: {
//       return {
//         ...state,
//         products: [...state.products, action.payload],
//         numberOfProduct: state.numberOfProduct + 1

//       }
//     }
//     default:return state
//   }
// }

// const store = createStore(productReducer,applyMiddleware(logger));

// store.subscribe(() => {
//   console.log(store.getState())
// });

// store.dispatch(getProduct())
// store.dispatch(addProduct("milk"))

const { createStore, applyMiddleware } = require("redux");
const {thunk} = require("redux-thunk");
const axios = require("axios");
const GET_TODOS = "GET_TODOS";
const GET_TODOS_SUCCESS = "SUCCESS_TODOS";
const GET_TODOS_ERROR = "ERROR_TODOS";

const initialTodos = {
  isLoading: false,
  error: null,
  todos: [],
};

const getTodos = () => {
  return {
    type: GET_TODOS,
  };
};
const getTodosSuccess = (value) => {
  return {
    type: GET_TODOS_SUCCESS,
    payload: value,
  };
};
const getTodosError = (error) => {
  return {
    type: GET_TODOS_ERROR,
    payload: error,
  };
};

const todosReducer = (state = initialTodos, action) => {
  switch (action.type) {
    case GET_TODOS: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_TODOS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        todos: action.payload,
      };
    }
    case GET_TODOS_ERROR: {
      return {
        ...state,
        error: true,
        isLoading: false,
        todos: action.payload,
      };
    }
    default:
      return state;
  }
};

const fetchData = () => {
  return (dispatch) => {
    dispatch(getTodos());
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        const title = res.data.map(item => item.title)
        dispatch(getTodosSuccess(title))
      })
      .catch((error) => dispatch(getTodosError(error.message)));
  };
};

const store = createStore(todosReducer, applyMiddleware(thunk));

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(fetchData());
