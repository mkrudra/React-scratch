import axios from 'axios';
import {
    SET_GENERAL_MESSAGE, 
    REMOVE_GENERAL_MESSAGE,
} from './types';
import { timeout } from '../utils/common';
import { logoutUser } from './LoginProcessAction';




export function removeGeneralMessage() {
    return {
        type: REMOVE_GENERAL_MESSAGE
    }
}

export function setGeneralMessage(generalMessage) {
    return {
        type: SET_GENERAL_MESSAGE,
        generalMessage: generalMessage
    }

}

export function setError(error, dispatch,showGeneral) {
    if (showGeneral || (error.errors == null || error.errors.length == 0)) {
        dispatch(handleGeneralMessage(false, error.message));
        timeout(removeGeneralMessage, 3000, dispatch);
        return null;
    } else {
        return error.errors;
    }


}

export function hideSuccessOrErrorMsg() {
    return dispatch => {
        dispatch(removeGeneralMessage());
    }
}

export function handleGeneralMessage(isSuccess,msgData) {
    var msg = {};
    msg.success = isSuccess;
    msg.msg = msgData;
    return setGeneralMessage(msg);
}


export function handleAuthenticationAndAuthorization(data, status) {
    switch (status) {
        case 401:
            return logoutUser();
        case 403:
            return handleGeneralMessage(false, data.error.message);

    }
}