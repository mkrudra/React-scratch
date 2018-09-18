import {
  USER_RESET,
  USER_INIT,
  USER_SUCCESS,
  USER_FAILED
} from './../actions/types';
import { clone } from './../utils/common';

const initialState = {
  isLoading: false,
  isLoaded: false,
  userData: null
};

export default (state = initialState, action = {}) => {
  let changes = {};

  switch (action.type) {

    case USER_RESET:
    case USER_FAILED:
      changes = { ...initialState };
      break;

    case USER_INIT:
      changes = {
        isLoading: true,
        isLoaded: false,
        userData: null
      };
      break;

    case USER_SUCCESS: {
      const userData = "jsdkasjlkd";
      changes = {
        isLoading: false,
        isLoaded: true,
        userData
      };
    }
      break;

    default:
      changes = {};
      break;
  }

  return clone(state, changes);
};