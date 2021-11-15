//TRANSACTIONS
export const NEW_TRANSACTION = "NEW_TRANSACTION";
export const GET_TRANSACTIONS = "GET_TRANSACTIONS";
export const SET_TRANSACTIONS = "SET_TRANSACTIONS";
export const DELETE_TRANSACTION = "DELETE_TRANSACTION";
export const DELETE_TRANSACTIONS = "DELETE_TRANSACTIONS";

export const newTransaction = (transaction) => ({
  type: NEW_TRANSACTION,
  payload: transaction,
});

export const getTransactions = (transactions) => ({
  type: GET_TRANSACTIONS,
  payload: transactions,
});

export const setTransactions = (transaction) => ({
  type: SET_TRANSACTIONS,
  payload: transaction,
});

export const deleteTransaction = (transaction) => ({
  type: DELETE_TRANSACTION,
  payload: transaction,
});

export const deleteTransactions = (transactions) => ({
  type: DELETE_TRANSACTIONS,
  payload: transactions,
});

//LOGIN
export const SET_LOGGED_IN = "SET_LOGGED_IN";

export const setLoggedIn = (login) => ({
  type: SET_LOGGED_IN,
  payload: login,
});

//USER NAME
export const USER_NAME = "USER_NAME";

export const setUserName = (user) => ({
  type: USER_NAME,
  payload: user,
});
