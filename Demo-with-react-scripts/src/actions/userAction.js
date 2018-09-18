import {
  USER_RESET,
  USER_INIT,
  USER_SUCCESS,
  USER_FAILED
} from './types';

export function userReset() {
  return {
    type: USER_RESET,
  };
}

export function userInit() {
  return {
    type: USER_INIT,
  };
}

export function userSuccess(data, headers) {
  return {
    type: USER_SUCCESS,
    payload: {
      receivedAt: Date.now(),
      data,
      headers,
    },
  };
}

export function userFailed(error) {
  return {
    type: USER_FAILED,
  };
}

export function userRequest() {

  return (dispatch) => {
    
    dispatch(userSuccess());
    
    return ({abc: "abcdghfhj"});
  };

}