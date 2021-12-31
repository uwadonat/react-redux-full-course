import * as ACTION_TYPES from "../actions/actionTypes";

const initialState = {
  user_text: "",
  password: ""
};

const Reducer2 = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.USER_INPUT:
      return {
        ...state,
        user_text: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer2;
