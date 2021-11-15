import { SET_LOGGED_IN } from "../actions";

const loggedIn = (state = false, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_LOGGED_IN: {
      const loggedIn = payload;
      return loggedIn;
    }
    default: {
      return state;
    }
  }
};

export default loggedIn;
