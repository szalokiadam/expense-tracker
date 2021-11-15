import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import LoadingScreen from "./components/LoadingScreen";
import { HashRouter as Router } from "react-router-dom";
import configureStore from "./store";
// REDUX
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/lib/integration/react";

require("dotenv").config();

const store = configureStore;
const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={<LoadingScreen />}>
      <Router>
        <App />
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
