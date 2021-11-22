import { SET_SETTINGS } from "../actions";

const DEFAULT_VALUES = {
  maxTransactions: 15,
  userName: "",
};

const settings = (state = DEFAULT_VALUES, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_SETTINGS: {
      return payload;
    }
    default: {
      return state;
    }
  }
};

export default settings;
