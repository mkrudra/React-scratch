import {
  USER_RESET,
  USER_INIT,
  USER_SUCCESS,
  USER_FAILED
} from './../actions/types';
import {
  clone
} from './../utils/common';

const INITIAL_STATE = {
  isLoading: false,
  isLoaded: false,
  userData: null
};

export default (state = INITIAL_STATE, action = {}) => {
  var updatedata = {};
  switch (action.type) {
    case USER_RESET:
      state=null;
    break;
    case USER_FAILED:
      updatedata = { ...INITIAL_STATE
      }
      break;

    case USER_INIT:
      updatedata = {
        isLoading: true,
        isLoaded: false,
        userData: null
      }
      break;

    case USER_SUCCESS:
    const userdata = Object.assign({}, action.payload.data);
    
      updatedata = {
        isLoading: false,
        isLoaded: true,
        userData: userdata
      }
      break;

    default:
      updatedata = {}
      break;
  }
  return updatedata;
}