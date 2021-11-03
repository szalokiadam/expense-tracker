import { createContext } from "react";

export const GlobalTransactions = createContext({
  transactions: [],
  setTransactions: () => {},
});

export const LoggedIn = createContext({
  loggedIn: false,
  setLoggedIn: () => {},
});
