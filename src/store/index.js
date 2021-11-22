import { combineReducers, createStore } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

import {
  transactions,
  loggedIn,
  user,
  transactionModal,
  settings,
} from "../reducers";

const RootReducer = combineReducers({
  transactions,
  loggedIn,
  user,
  transactionModal,
  settings,
});
const persistConfig = {
  key: "expense-tracker",
  storage,
  stateReconciler: autoMergeLevel2,
};
const persistedReducer = persistReducer(persistConfig, RootReducer);

const configureStore = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default configureStore;
