import "./resources/scss/App.scss";
import { Route, Redirect, Switch } from "react-router-dom";
import Home from "./components/Home";
import Error404 from "./components/Error404";
import LoginError from "./components/LoginError";
import TransactionsByDate from "./components/TransactionsByDate";
import { Header, Footer } from "./components/HeaderFooter";

// REDUX
import { connect } from "react-redux";

function App({ loggedIn }) {
  return (
    <>
      <div className="Background"></div>
      <div className="App">
        <Header />
        <main>
          {!loggedIn && <Redirect to="/home" />}
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route path="/home">{loggedIn ? <Home /> : <LoginError />}</Route>
            <Route path="/monthly-transactions">
              <TransactionsByDate />
            </Route>
            <Route path="*">
              <Error404 />
            </Route>
          </Switch>
        </main>
        <Footer />
      </div>
    </>
  );
}

function mapStateToProps(state) {
  return {
    loggedIn: state.loggedIn,
  };
}

export default connect(mapStateToProps)(App);
