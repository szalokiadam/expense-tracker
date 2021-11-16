import {
  NEW_TRANSACTION,
  SET_TRANSACTIONS,
  DELETE_TRANSACTION,
  DELETE_TRANSACTIONS,
} from "../actions";

const transactions = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case NEW_TRANSACTION: {
      const transaction = payload;
      return state.concat(transaction);
    }
    case SET_TRANSACTIONS: {
      const transaction = payload;
      return transaction;
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
