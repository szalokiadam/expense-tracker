import { USER_NAME } from "../actions";

const user = (state = null, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_NAME: {
      const user = payload;
      return user;
    }
    default: {
      return state;
    }
  }
};

export default user;
