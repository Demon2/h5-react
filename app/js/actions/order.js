import config from '../config';
import {push} from  '../store/history';
import {Promise} from 'es6-promise';

import OrderServer from '../server/OrderServer'
import LocalStorageServer from '../server/LocalStorageServer'
import * as LoadingActions from './loading'
import * as AddressActions from './address'
import * as CartActions from './cart'

import {objectLength} from 'util'

const Path = 'order';
export const ADD_ORDER = `${Path}/ADD_ORDER`;
export const ADD_ORDER_SUCCESS = `${Path}/ADD_ORDER_SUCCESS`;

var initIndexData = function (dispatch, getState) {
    return new Promise((resolve, reject)=> {
        const action = AddressActions.getList();
        dispatch(action);
        action.promise.then(function (data) {
            resolve(data)
        })
    })
};

export function getIndexData() {
    return (dispatch, getState)=> {
        const userSelectList = getState().toJS().cart.userSelectList;
        const addressList = getState().toJS().address.list;

        if (objectLength(userSelectList) == 0 || addressList.length == 0) {
            const cart = LocalStorageServer.get('cart');

            if (objectLength(cart.userSelectList) != 0) {

                dispatch(CartActions.setInitData(cart));
                dispatch(LoadingActions.show('page'));

                initIndexData(dispatch, getState).then(function () {
                    dispatch(LoadingActions.hide());
                })

            } else {
                push('/cart');
            }
        }

    }
}

export function goIndexPage() {
    return (dispatch, getState)=> {
        const cart = getState().toJS().cart;
        LocalStorageServer.set('cart', cart);

        dispatch(LoadingActions.show());
        initIndexData(dispatch, getState).then(function () {
            dispatch(LoadingActions.hide());
            push('/order/index');
        })
    }
}