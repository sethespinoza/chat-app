import {
    ADD_MESSAGE,
    RECEIVE_MESSAGE,
    ADD_USER,
    UPDATE_USERS_LIST
} from './ActionTypes';

export function addMessage(message) {
    return {
        type: ADD_MESSAGE,
        payload: message
    };
}
export function receiveMessage(message) {
    return {
        type: RECEIVE_MESSAGE,
        payload: message
    };
}
export function addUser(user) {
    return {
        type: ADD_USER,
        payload: user
    };
}
export function updateUsersList(users) {
    return {
        type: UPDATE_USERS_LIST,
        payload: users
    };
}