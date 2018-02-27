import AddressServer from '../server/AddressServer'
import config from '../config';
import {push} from  '../store/history';
import * as LoadingActions from 'actions/loading'
import {Promise} from 'es6-promise';

const Path = 'transition';

export const CHANGE_ENABLE = `${Path}/CHANGE_STATUS`;
export const CHANGE_DIRECTION = `${Path}/CHANGE_STATUS`;
export const SET_TIMEOUT = `${Path}/SET_TIMEOUT`;

export function disabled() {
    return {
        type: CHANGE_ENABLE,
        enable: false
    }
}
export function enable() {
    return {
        type: CHANGE_ENABLE,
        enable: true
    }
}

export function forward() {
    return {
        type: CHANGE_DIRECTION,
        direction: 'forward'
    }
}
export function back() {
    return {
        type: CHANGE_DIRECTION,
        direction: 'back'
    }
}
export function setTimeout(timeout) {
    return {
        type: CHANGE_DIRECTION,
        timeout
    }
}