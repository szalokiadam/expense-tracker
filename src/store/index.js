import { combineReducers, createStore } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

import { transactions, loggedIn, user } from "../reducers";

const RootReducer = combineReducers({
  transactions,
  loggedIn,
  user,
});
const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2,
};
const persistedReducer = persistReducer(persistConfig, RootReducer);

const configureStore = createStore(persistedReducer);

export default configureStore;
