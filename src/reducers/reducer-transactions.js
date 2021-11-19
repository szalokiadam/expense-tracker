import {
  NEW_TRANSACTION,
  UPDATE_TRANSACTION,
  DELETE_TRANSACTION,
  DELETE_TRANSACTIONS,
} from "../actions";

const transactions = (state = [], action) => {
  const { type, payload } = action;

  function sort(transactions) {
    return transactions.sort((a, b) => a.created - b.created);
  }
  switch (type) {
    case NEW_TRANSACTION: {
      const transaction = payload;
      const newTransactions = [...state, transaction];
      return sort(newTransactions);
    }
    case UPDATE_TRANSACTION: {
      const newTransactions = state.map((tr) => {
        if (tr.id === payload.id) {
          return payload;
        } else {
          return tr;
        }
      });
      return sort(newTransactions);
    }
    case DELETE_TRANSACTION: {
      const transaction = payload;
      return state.filter((tr) => tr.id !== transaction.id);
    }
    case DELETE_TRANSACTIONS: {
      return [];
    }
    default: {
      return state;
    }
  }
};

export default transactions;
