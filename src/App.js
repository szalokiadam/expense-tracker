import { useState, useMemo } from "react";
import "./App.scss";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Home from "./components/Home";
import Error404 from "./components/Error404";
import { Header, Footer } from "./components/HeaderFooter";
import { loadStore } from "./components/Store";

import { LoggedIn } from "./components/_globalContext";
// import createHistory from "history/createBrowserHistory";

function App() {
  const [login, setLogin] = useState(!loadStore("__login")[0]);

  const loginValues = useMemo(() => ({ login, setLogin }), [login]);

  return (
    <div className="App">
      <LoggedIn.Provider value={loginValues}>
        <Header />
        <main>
          <Router>
            <Switch>
              <Redirect exact from="/" to="/home" />
              <Redirect from="/login" to="/home" />
              <Redirect from="/logout" to="/home" />
              <Route path="/home">{!login ? <Home /> : "LOGIN!!!"}</Route>
              <Route path="*">{!login ? <Error404 /> : "LOGIN!!!"}</Route>
            </Switch>
          </Router>
        </main>
        <Footer />
      </LoggedIn.Provider>
    </div>
  );
}

export default App;
