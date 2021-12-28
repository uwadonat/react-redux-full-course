import * as ACTION_TYPES from "./actionTypes";

export const SUCCESS = {
  type: ACTION_TYPES.SUCCESS,
};

export const FAILURE = {
  type: ACTION_TYPES.FAILURE,
};

//action creators

export const success = () => {
  return {
    type: ACTION_TYPES.SUCCESS,
  };
};

export const failure = () => {
  return {
    type: ACTION_TYPES.FAILURE,
  };
};

// passing data to the action ctreator
export const user_input = (text) => {
  return {
    type: ACTION_TYPES.USER_INPUT,
    payload: text,
  };
};
