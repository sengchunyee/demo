import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import movieReducer from "./reducers";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-community/async-storage";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["wishlist"],
};

const rootReducer = combineReducers({
  movieReducer: persistReducer(persistConfig, movieReducer),
});

const store = createStore(rootReducer, applyMiddleware(thunk));
const appPersist = persistStore(store);

export { appPersist, store };
