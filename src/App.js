import { useState, useMemo, useEffect } from "react";
import "./resources/scss/App.scss";
import { Route, Redirect, Switch } from "react-router-dom";
import Home from "./components/Home";
import Error404 from "./components/Error404";
import LoginError from "./components/LoginError";
import LoadingScreen from "./components/LoadingScreen";
import { Header, Footer } from "./components/HeaderFooter";
import { loadStore } from "./components/Store";
import { LoggedIn } from "./components/_globalContext";

function App() {
  const [login, setLogin] = useState(!loadStore("__login")[0]);
  const [loading, setLoading] = useState(true);

  const loginValues = useMemo(() => ({ login, setLogin }), [login]);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <div className="Background"></div>
      <div className="App">
        {loading && <LoadingScreen />}
        <LoggedIn.Provider value={loginValues}>
          <Header />
          <main>
            <Switch>
              {login && <LoginError />}
              <Redirect exact from="/" to="/home" />

              <Route path="/home">{login ? <LoginError /> : <Home />}</Route>
              <Route path="/monthly-transactions">MONTHLY TRANSACTION</Route>
              <Route path="*">
                <Error404 />
              </Route>
            </Switch>
          </main>
          <Footer />
        </LoggedIn.Provider>
      </div>
    </>
  );
}

export default App;
