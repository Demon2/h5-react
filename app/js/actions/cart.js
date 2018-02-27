import CartServer from '../server/CartServer'
import config from '../config';
import {push} from  '../store/history';
import * as LoadingActions from 'actions/loading'
import {Promise} from 'es6-promise';

const Path = 'cart';

export const GET_CART_LIST = `${Path}/GET_CART_LIST`;
export const GET_CART_LIST_SUCCESS = `${Path}/GET_CART_LIST_SUCCESS`;

export const SELECT_TOGGLE = `${Path}/SELECT_TOGGLE`;
export const SELECT_ALL_TOGGLE = `${Path}/SELECT_ALL_TOGGLE`;

export const FLOAT_ICON_VISIBLE = `${Path}/FLOAT_ICON_VISIBLE`;

export const CHANGE_AMOUNT = `${Path}/CHANGE_AMOUNT`;

export const SET_INIT_DATA = `${Path}/SET_INIT_DATA`;


export function setInitData(data) {
    return {
        type: SET_INIT_DATA,
        data
    }
}

export function setFloatIconVisible(visible) {
    return {
        type: FLOAT_ICON_VISIBLE,
        visible
    }
}

export function toggleSelectAll() {
    return {
        type: SELECT_ALL_TOGGLE
    }
}
export function toggleSelect(index) {
    return {
        type: SELECT_TOGGLE,
        index
    }
}

export function changeAmount(index, packageId, amount) {
    return dispatch=> {
        CartServer.update({packageId, amount}).then(function (data) {
            dispatch({
                type: CHANGE_AMOUNT,
                index,
                amount
            })
        })
    }
}


var getInitData = function (dispatch) {
    return new Promise((resolve, reject)=> {
        let promise = CartServer.getList();
        dispatch({
            type: GET_CART_LIST,
            promise: promise
        });
        promise.then(function (data) {
            resolve(data)
        })
    })
};

export function getList() {
    return dispatch=> {
        dispatch(LoadingActions.show('page'));
        getInitData(dispatch).then(function () {
            dispatch(LoadingActions.hide());
        })
    }
}

export function getListAndGoPage() {
    return dispatch=> {
        dispatch(LoadingActions.show());
        getInitData(dispatch).then(function () {
            dispatch(LoadingActions.hide());
            push(`/cart`);
        })
    }
}