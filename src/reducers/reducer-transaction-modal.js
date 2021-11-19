import { TOGGLE_TRANSACTION_MODAL } from "../actions";

const transactionModal = (state = false, action) => {
  const { type, payload } = action;

  switch (type) {
    case TOGGLE_TRANSACTION_MODAL: {
      return {
        open: payload.open,
        edit: payload.edit,
      };
    }
    default: {
      return state;
    }
  }
};

export default transactionModal;
