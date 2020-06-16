import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import combineReducers from "./combineReducers";

// the initial global state of the app
const initialState = {
   currentUser: {},
   queuedCards: [],
   indexOfCurrentCard: 0,
};

const store = createStore(combineReducers, initialState, composeWithDevTools());

export default store;
