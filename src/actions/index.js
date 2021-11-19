// TRANSACTIONS
export const NEW_TRANSACTION = "NEW_TRANSACTION";
export const UPDATE_TRANSACTION = "UPDATE_TRANSACTION";
export const DELETE_TRANSACTION = "DELETE_TRANSACTION";
export const DELETE_TRANSACTIONS = "DELETE_TRANSACTIONS";

export const newTransaction = (transaction) => ({
  type: NEW_TRANSACTION,
  payload: transaction,
});

export const updateTransaction = (transaction) => ({
  type: UPDATE_TRANSACTION,
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

// LOGIN
export const SET_LOGGED_IN = "SET_LOGGED_IN";

export const setLoggedIn = (login) => ({
  type: SET_LOGGED_IN,
  payload: login,
});

// USER NAME
export const USER_NAME = "USER_NAME";

export const setUserName = (user) => ({
  type: USER_NAME,
  payload: user,
});

// NEW/EDIT TRANSACTION MODAL OPENER
export const TOGGLE_TRANSACTION_MODAL = "TOGGLE_TRANSACTION_MODAL";

export const toggleTransactionModal = ({ open, edit }) => ({
  type: TOGGLE_TRANSACTION_MODAL,
  payload: { open, edit },
});
