// const { createStore } = require("redux");
// const INCREMENT = "INCREMENT";
// const DECREMENT = "DECREMENT";
// const ADD_USER = "ADD_USER";

const { createStore, combineReducers } = require("redux");

// const initialValue = {
//   count: 0,
//   user:[{name:"rana"}]
// }
// const increment = () => {
//   return {
//     type:INCREMENT,
//   }
// }
// const decrement = () => {
//   return {
//     type:DECREMENT,
//   }
// }
// const addUser = (value) => {
//   return {
//     type: ADD_USER,
//     payload:value
//   }
// }

// const counterAction = (state=initialValue,action) => {
//   switch (action.type) {
//     case INCREMENT: {
//       return {
//         ...state,
//         count:state.count + 1
//       }
//     }
//     case DECREMENT: {
//       return {
//         ...state,
//         count:state.count - 1
//       }
//     }
//     case ADD_USER: {
//       return {
//         ...state,
//         count: state.count + 1,
//         user:[...state.user,action.payload]
//       }
//     }
  
//     default:
//       state
//   }
// }

// const store = createStore(counterAction);

// store.subscribe(() => {
//   console.log(store.getState())
// })

// store.dispatch(increment())
// store.dispatch(addUser({name:"atike"}))

const get_product = "GET_PRODUCT";
const add_product = "ADD_PRODUCT";
const getCardItems = "GET_CARD_ITEMS";
const addCardItems = "ADD_CARD_ITEMS";

const initialCardState = {
  card: ["sugar"],
  numberOfCard:1,
}
const initialProductState = {
  products: ["sugar", "salt"],
  numberOfProduct:2,
}

const getProduct = () => {
  return {
    type:get_product,
  }
}
const getCard = () => {
  return {
    type:getCardItems,
  }
}
const addProduct = (value) => {
  return {
    type: add_product,
    payload:value
  }
}
const addCard = (value) => {
  return {
    type: addCardItems,
    payload:value
  }
}


const productReducer = (state=initialProductState,action) => {
  switch (action.type) {
    case get_product: {
      return {
        ...state
      }
    }
    case add_product: {
      return {
        ...state,
        products: [...state.products, action.payload],
        numberOfProduct: state.numberOfProduct + 1
        
      }
    }
    default:return state
  }
}

const cardReducer = (state = initialCardState, action) => {
  switch (action.type) {
    case getCardItems: {
      return {
        ...state
      }
    }
    case addCardItems: {
      return {
        ...state,
        card: [...state.card, action.payload],
        numberOfCard:state.numberOfCard + 1
      }
    }
  
    default: return state
  }
}

const rootReducer = combineReducers({
  productR: productReducer,
  cardR:cardReducer
})
const store = createStore(rootReducer);

store.subscribe(() => {
  console.log(store.getState())
});

store.dispatch(getProduct())
store.dispatch(addProduct("milk"))
store.dispatch(getCard())
store.dispatch(addCard("burger"))