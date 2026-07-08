const { createStore } = require("redux")
const { counterReducer } = require("./reducer/counterReducer")

export const store = createStore(counterReducer);
