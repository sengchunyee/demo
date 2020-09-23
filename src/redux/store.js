import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import movieReducer from "./reducers";

const rootReducer = combineReducers({
  movieReducer: movieReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
