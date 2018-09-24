import {
  USER_RESET,
  USER_INIT,
  USER_SUCCESS,
  USER_FAILED
} from './types';
import API from './../utils/api';

export function userReset() {
  console.log('hi reset')
  return {
    type: USER_RESET,
  };
}

export function userInit() {
  return {
    type: USER_INIT,
  };
}

export function userSuccess(data) {
  return ({
    type: USER_SUCCESS,
    payload: {
      data: data
    },
  });
}

export function userFailed(error) {
  return {
    type: USER_FAILED,
  };
}

export function userRequest(url) {
  return (dispatch) => {

    API.get(url)
      .then(response => {
        dispatch(userSuccess(response));
      })
      .catch(error => {
        console.log("error = ", error);
        dispatch(userFailed(error));
      });

    dispatch(userInit());
  }
}